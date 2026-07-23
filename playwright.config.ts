import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    trace: 'on-first-retry',
    headless: true,
  },

  projects: [
    {
      name: 'stg',
      use: {
        browserName: 'chromium',
        baseURL: 'https://www.saucedemo.com',
      },
    },
    {
      name: 'prod',
      use: {
        browserName: 'chromium',
        baseURL: 'https://www.saucedemo.com',
      },
    },
  ],
});