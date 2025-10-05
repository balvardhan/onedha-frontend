/**
 * Environment configuration utility
 * Provides type-safe access to environment variables
 */

export const env = {
  // API Configuration
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  
  // App Configuration
  appName: import.meta.env.VITE_APP_NAME || 'Onedha',
  
  // Debug Configuration
  isDebug: import.meta.env.VITE_DEBUG === 'true',
  
  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const

// Validation function to ensure required environment variables are set
export const validateEnv = () => {
  const requiredVars = ['VITE_API_URL'] as const
  
  const missing = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  )
  
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    )
  }
}

// Call validation in development
if (import.meta.env.DEV) {
  validateEnv()
}
