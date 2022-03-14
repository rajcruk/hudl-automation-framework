import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    // viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  workers: 1,
  timeout: 60000,  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

};
export default config;