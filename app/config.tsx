export const RESUME_ACCESS_CODE = "KP2024"; // You can change this to any code you prefer

export const CONFIG = {
  resume: {
    accessCode: RESUME_ACCESS_CODE,
    maxAttempts: 3,
    lockoutDuration: 300000, // 5 minutes in milliseconds
  },
  // Add other configuration constants here as needed
} as const;
