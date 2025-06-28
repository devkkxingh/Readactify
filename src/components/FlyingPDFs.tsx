"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Lock } from "lucide-react";

export default function FlyingPDFs() {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden">
      {/* Conveyor Belt */}
      <div className="absolute bottom-20 left-0 right-0 h-2 bg-gray-300 rounded-full">
        <motion.div
          className="h-full bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)",
          }}
        />
      </div>

      {/* Belt Supports */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-between px-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-6 bg-gray-400 rounded-full" />
        ))}
      </div>

      {/* PDF Documents */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-24"
          initial={{ x: -100 }}
          animate={{ x: window.innerWidth + 100 }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* PDF Document */}
            <div className="w-12 h-16 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <div className="space-y-1 mb-1">
                <div className="w-6 h-0.5 bg-gray-300 rounded"></div>
                <div className="w-4 h-0.5 bg-gray-300 rounded"></div>
                <div className="w-5 h-0.5 bg-gray-300 rounded"></div>
              </div>
              <FileText className="h-3 w-3 text-gray-400" />
            </div>

            {/* Security Transformation */}
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 0.5,
                delay: i * 2 + 3,
                repeat: Infinity,
                repeatDelay: 5.5,
              }}
            >
              <Shield className="h-3 w-3 text-white" />
            </motion.div>

            {/* Lock Indicator */}
            <motion.div
              className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.1, 1],
                opacity: [0, 1, 1],
              }}
              transition={{
                duration: 0.3,
                delay: i * 2 + 3.5,
                repeat: Infinity,
                repeatDelay: 5.7,
              }}
            >
              <Lock className="h-2 w-2 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Readactify Logo Processing Station */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-20 bg-gradient-to-br from-green-400 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <div className="relative">
              <Shield className="h-8 w-8 text-white" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-4 w-2.5 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Processing Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-blue-600 rounded-xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Process Labels */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
          <FileText className="w-3 h-3" />
          <span>Processing Pipeline</span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-medium text-green-700">
          <Shield className="w-3 h-3" />
          <span>Secured</span>
        </div>
      </div>
    </div>
  );
}
