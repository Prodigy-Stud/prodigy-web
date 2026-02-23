import { test, expect } from '@playwright/test';

test('renders homepage hero message', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: /from signals to shipped decisions/i })
  ).toBeVisible();
  await expect(page.getByRole('link', { name: /request demo/i })).toBeVisible();
});
