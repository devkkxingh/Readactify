-- Waitlist table for Readactify
-- This table stores user signups for the waitlist

CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  source VARCHAR(50) DEFAULT 'hero', -- hero, footer_cta
  user_agent TEXT,
  ip_address INET,
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending', -- pending, invited, onboarded
  position INTEGER, -- calculated waitlist position
  invited_at TIMESTAMP WITH TIME ZONE,
  notes TEXT -- admin notes
);

-- Add indexes for better query performance
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_status ON waitlist(status);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX idx_waitlist_position ON waitlist(position);
CREATE INDEX idx_waitlist_source ON waitlist(source);
CREATE INDEX idx_waitlist_utm_source ON waitlist(utm_source);

-- Add RLS (Row Level Security) policies
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Policy for inserting new waitlist entries (public can insert)
CREATE POLICY "Anyone can insert waitlist entries" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Policy for reading waitlist entries (only authenticated users/admins)
CREATE POLICY "Only authenticated users can view waitlist" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');

-- Policy for updating waitlist entries (only admins)
CREATE POLICY "Only admins can update waitlist" ON waitlist
  FOR UPDATE USING (auth.jwt() ->> 'role' = 'admin');

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at on row changes
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for waitlist analytics
CREATE VIEW waitlist_analytics AS
SELECT 
  DATE(created_at) as signup_date,
  COUNT(*) as signups_count,
  COUNT(CASE WHEN status = 'invited' THEN 1 END) as invited_count,
  COUNT(CASE WHEN status = 'onboarded' THEN 1 END) as onboarded_count,
  COUNT(CASE WHEN source = 'hero' THEN 1 END) as hero_signups,
  COUNT(CASE WHEN source = 'footer_cta' THEN 1 END) as footer_signups,
  COUNT(CASE WHEN utm_source IS NOT NULL THEN 1 END) as utm_signups,
  COUNT(CASE WHEN utm_source = 'google' THEN 1 END) as google_signups,
  COUNT(CASE WHEN utm_source = 'twitter' THEN 1 END) as twitter_signups,
  COUNT(CASE WHEN utm_source = 'linkedin' THEN 1 END) as linkedin_signups
FROM waitlist
GROUP BY DATE(created_at)
ORDER BY signup_date DESC;

-- Grant permissions for the analytics view
GRANT SELECT ON waitlist_analytics TO authenticated;

-- Function to calculate and update waitlist positions
CREATE OR REPLACE FUNCTION update_waitlist_positions()
RETURNS void AS $$
BEGIN
  UPDATE waitlist 
  SET position = subquery.row_number
  FROM (
    SELECT id, ROW_NUMBER() OVER (ORDER BY created_at) as row_number
    FROM waitlist
    WHERE status = 'pending'
  ) AS subquery
  WHERE waitlist.id = subquery.id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get waitlist position for a specific email
CREATE OR REPLACE FUNCTION get_waitlist_position(user_email TEXT)
RETURNS INTEGER AS $$
DECLARE
  user_position INTEGER;
BEGIN
  SELECT position INTO user_position
  FROM waitlist 
  WHERE email = user_email AND status = 'pending';
  
  RETURN COALESCE(user_position, 0);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to update positions when new users are added
CREATE OR REPLACE FUNCTION trigger_update_positions()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM update_waitlist_positions();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_positions_on_insert
  AFTER INSERT ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION trigger_update_positions();

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION get_waitlist_position(TEXT) TO anon, authenticated; 