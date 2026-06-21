import { test, expect } from '@playwright/test';

test('renders homepage hero message', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /agents decide.*agents code/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /book demo/i })).toBeVisible();
});
