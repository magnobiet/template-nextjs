# Next.js Template

[![Next.js](https://img.shields.io/badge/Next.js-for_the_badge?style=for-the-badge&logo=next.js&color=000000)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Shadcn UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)](https://playwright.dev/)
[![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/Husky-000000?style=for-the-badge&logo=husky&logoColor=white)](https://typicode.github.io/husky/#/)
[![Zod](https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=3068B7)](https://zod.dev/)

A modern template to kick off projects with Next.js, React, TypeScript, and Tailwind CSS, with a ready-to-use setup for testing, linting, and code quality.

## About the project

This repository serves as a solid foundation for building modern web applications with an organized structure and development tools already in place. The project includes:

- Next.js with App Router
- React 19 and TypeScript
- Tailwind CSS for styling
- Jest and Testing Library for unit tests
- Playwright for end-to-end testing
- ESLint, Prettier, and Husky for code consistency

## Installation

Requirements:

- Node.js 20+
- pnpm 9+

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

To run the project locally with HTTPS, use:

```bash
pnpm dev:https
```

## Useful scripts

| Script               | Description                      |
| -------------------- | -------------------------------- |
| `pnpm dev`           | Start the development server     |
| `pnpm build`         | Create a production build        |
| `pnpm start`         | Run the production build locally |
| `pnpm test`          | Run unit tests                   |
| `pnpm test:watch`    | Run tests in watch mode          |
| `pnpm test:coverage` | Run tests with coverage report   |
| `pnpm test:e2e`      | Run end-to-end tests             |
| `pnpm lint`          | Run ESLint checks                |
| `pnpm typecheck`     | Run TypeScript type checking     |
| `pnpm format`        | Format the project files         |

## Testing

The project is already set up for unit and end-to-end testing. To run the test suite:

```bash
pnpm test
pnpm test:e2e
```

## Contributing

Contributions are welcome. To collaborate:

1. Fork the project
2. Create a branch for your feature or fix
   - `git checkout -b feature/my-new-feature`
3. Commit your changes
   - `git commit -m "feat: add a new feature"`
4. Push to the remote repository
   - `git push origin feature/my-new-feature`
5. Open a pull request

## Security

If you discover a security vulnerability, please send an email to [magno.biet@gmail.com](mailto:magno.biet@gmail.com). All reports will be handled with priority.

## License

This project is licensed under the [MIT License](https://license.magnobiet.com/mit). Copyright © Magno Biét.
