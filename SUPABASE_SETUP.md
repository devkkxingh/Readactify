# Supabase Waitlist Setup

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Setup

1. Create a new Supabase project at https://supabase.com
2. Go to the SQL Editor in your Supabase dashboard
3. Copy and paste the contents of `supabase_waitlist.sql` and run it
4. This will create:
   - `waitlist` table with all necessary fields
   - Indexes for performance
   - Row Level Security policies
   - Analytics view
   - Helper functions for position calculation

## Features Implemented

### Frontend

- ✅ React Hook Form integration with Zod validation
- ✅ Server Actions for form submission
- ✅ Real-time form validation
- ✅ Loading states and error handling
- ✅ Success messages with waitlist position
- ✅ Duplicate email detection
- ✅ Source tracking (hero vs footer_cta)

### Backend

- ✅ Supabase database integration
- ✅ UTM parameter tracking
- ✅ IP address and user agent logging
- ✅ Automatic waitlist position calculation
- ✅ Email uniqueness constraints
- ✅ Analytics view for admin insights

### Security

- ✅ Row Level Security (RLS) enabled
- ✅ Public insert permissions for signups
- ✅ Protected read/update permissions
- ✅ Form validation and sanitization

## Usage

### Hero Section

```tsx
// Uses 'hero' as source
const { form, onSubmit, isSubmitting, result } = useWaitlistForm("hero");
```

### Footer CTA

```tsx
// Uses 'footer_cta' as source
const { form, onSubmit, isSubmitting, result } = useWaitlistForm("footer_cta");
```

### Server Actions

```tsx
// Direct server action usage
const result = await submitWaitlist({ email: "user@example.com" }, "hero");
```

## Analytics

Query the analytics view in Supabase:

```sql
SELECT * FROM waitlist_analytics ORDER BY signup_date DESC;
```

Get waitlist position for a user:

```sql
SELECT get_waitlist_position('user@example.com');
```

## Next Steps

1. Set up your Supabase project
2. Add environment variables
3. Run the SQL schema
4. Test the waitlist forms
5. Monitor signups in Supabase dashboard
