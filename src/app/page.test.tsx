import { render, screen, type RenderResult } from '@testing-library/react';
import type { ImgHTMLAttributes, ReactElement } from 'react';
import Home from './page';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    alt,
    ...properties
  }: ImgHTMLAttributes<HTMLImageElement>): ReactElement => (
    <img alt={alt} {...properties} />
  ),
}));

const setup = (): RenderResult => render(<Home />);

describe('Home page', () => {
  describe('layout structure', () => {
    it('renders the outer wrapper', () => {
      setup();

      expect(screen.getByTestId('home-wrapper')).toBeInTheDocument();
    });

    it('renders the main element', () => {
      setup();

      expect(screen.getByTestId('home-main')).toBeInTheDocument();
    });
  });

  describe('logos', () => {
    it('renders the Next.js logo with correct alt text', () => {
      setup();

      expect(screen.getByTestId('nextjs-logo')).toHaveAttribute(
        'alt',
        'Next.js logo',
      );
    });

    it('renders the Vercel logo with correct alt text', () => {
      setup();

      expect(screen.getByTestId('vercel-logo')).toHaveAttribute(
        'alt',
        'Vercel logomark',
      );
    });
  });

  describe('content', () => {
    it('renders the content section', () => {
      setup();

      expect(screen.getByTestId('home-content')).toBeInTheDocument();
    });

    it('renders the heading with expected text', () => {
      setup();

      const heading = screen.getByTestId('home-heading');

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('To get started, edit the');
    });

    it('renders the filename code snippet', () => {
      setup();

      expect(screen.getByTestId('home-code-filename')).toHaveTextContent(
        'page.tsx',
      );
    });

    it('renders the description paragraph', () => {
      setup();

      expect(screen.getByTestId('home-description')).toBeInTheDocument();
    });
  });

  describe('links', () => {
    const linkCases = [
      ['link-templates', 'vercel.com/templates'],
      ['link-learning', 'nextjs.org/learn'],
      ['link-deploy', 'vercel.com/new'],
      ['link-docs', 'nextjs.org/docs'],
    ] as const;

    it.each(linkCases)(
      'renders the %s link with correct href',
      (testId, href) => {
        setup();

        const link = screen.getByTestId(testId);

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', expect.stringContaining(href));
      },
    );

    it('renders the Deploy Now link with target _blank and rel noopener', () => {
      setup();

      const link = screen.getByTestId('link-deploy');

      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders the Documentation link with target _blank and rel noopener', () => {
      setup();

      const link = screen.getByTestId('link-docs');

      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('actions section', () => {
    it('renders the actions container', () => {
      setup();

      expect(screen.getByTestId('home-actions')).toBeInTheDocument();
    });

    it('renders both action links', () => {
      setup();

      expect(screen.getByTestId('link-deploy')).toBeInTheDocument();
      expect(screen.getByTestId('link-docs')).toBeInTheDocument();
    });
  });
});
