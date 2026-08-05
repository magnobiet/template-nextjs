import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders the main layout', async ({ page }) => {
    await expect(page.getByTestId('home-wrapper')).toBeVisible();
    await expect(page.getByTestId('home-main')).toBeVisible();
  });

  test('displays the Next.js logo', async ({ page }) => {
    const logo = page.getByTestId('nextjs-logo');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('alt', 'Next.js logo');
  });

  test('renders the heading with page.tsx reference', async ({ page }) => {
    const heading = page.getByTestId('home-heading');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('To get started, edit the');
    await expect(page.getByTestId('home-code-filename')).toHaveText('page.tsx');
  });

  test('renders the description with Templates and Learning links', async ({
    page,
  }) => {
    const description = page.getByTestId('home-description');
    await expect(description).toBeVisible();
    await expect(description).toContainText('Looking for a starting point');

    const templatesLink = page.getByTestId('link-templates');
    await expect(templatesLink).toHaveText('Templates');
    await expect(templatesLink).toHaveAttribute(
      'href',
      /vercel\.com\/templates/,
    );

    const learningLink = page.getByTestId('link-learning');
    await expect(learningLink).toHaveText('Learning');
    await expect(learningLink).toHaveAttribute('href', /nextjs\.org\/learn/);
  });

  test('renders the Deploy Now button with Vercel logo', async ({ page }) => {
    const deployLink = page.getByTestId('link-deploy');
    await expect(deployLink).toBeVisible();
    await expect(deployLink).toContainText('Deploy Now');
    await expect(deployLink).toHaveAttribute('href', /vercel\.com\/new/);
    await expect(deployLink).toHaveAttribute('target', '_blank');
    await expect(deployLink).toHaveAttribute('rel', 'noopener noreferrer');

    const vercelLogo = page.getByTestId('vercel-logo');
    await expect(vercelLogo).toBeVisible();
    await expect(vercelLogo).toHaveAttribute('alt', 'Vercel logomark');
  });

  test('renders the Documentation link', async ({ page }) => {
    const docsLink = page.getByTestId('link-docs');
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveText('Documentation');
    await expect(docsLink).toHaveAttribute('href', /nextjs\.org\/docs/);
    await expect(docsLink).toHaveAttribute('target', '_blank');
    await expect(docsLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders the actions section with both CTAs', async ({ page }) => {
    const actions = page.getByTestId('home-actions');
    await expect(actions).toBeVisible();
    await expect(actions.getByRole('link')).toHaveCount(2);
  });
});
