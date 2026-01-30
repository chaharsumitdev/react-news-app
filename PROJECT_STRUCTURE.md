# Project Structure Overview

This document provides a detailed overview of the project structure and organization.

## Root Directory

```
vite-boilerplate-react/
├── .github/              # GitHub specific files
│   └── workflows/        # GitHub Actions CI/CD workflows
├── .vscode/              # VSCode editor settings
├── dist/                 # Production build output (generated)
├── node_modules/         # Dependencies (generated)
├── public/               # Static assets
└── src/                  # Source code
```

## Source Directory (`src/`)

### Components (`src/components/`)

Reusable UI components organized by feature.

```
components/
├── Button/
│   ├── Button.tsx       # Component implementation
│   ├── Button.test.tsx  # Component tests
│   └── index.ts         # Export file
├── Card/
│   ├── Card.tsx
│   └── index.ts
├── LoadingSpinner/
│   ├── LoadingSpinner.tsx
│   └── index.ts
└── index.ts             # Central export for all components
```

**Usage:**

```tsx
import { Button, Card } from '@/components';
```

### Pages (`src/pages/`)

Top-level page components that represent routes.

```
pages/
├── Home/
│   ├── Home.tsx
│   └── index.ts
├── About/
│   ├── About.tsx
│   └── index.ts
├── Dashboard/
│   ├── Dashboard.tsx
│   └── index.ts
├── NotFound/
│   ├── NotFound.tsx
│   └── index.ts
└── index.ts
```

### Layouts (`src/layouts/`)

Layout components that wrap pages with common UI elements.

```
layouts/
├── MainLayout/
│   ├── MainLayout.tsx   # Main app layout with nav and footer
│   └── index.ts
└── index.ts
```

### Hooks (`src/hooks/`)

Custom React hooks for reusable logic.

```
hooks/
├── useFetch.ts          # Hook for API data fetching
├── useLocalStorage.ts   # Hook for localStorage management
└── index.ts
```

**Examples:**

- `useFetch` - Handles API calls with loading, error, and data states
- `useLocalStorage` - Syncs state with localStorage

### Services (`src/services/`)

API integration and external service communication.

```
services/
├── api.ts               # Axios instance with interceptors
└── exampleService.ts    # Example service methods
```

**Features:**

- Configured Axios instance
- Request/response interceptors
- Automatic token injection
- Centralized error handling

### Utils (`src/utils/`)

Utility functions and helper methods.

```
utils/
├── formatters.ts        # Data formatting utilities
├── validators.ts        # Input validation functions
└── index.ts
```

**Examples:**

- `formatDate` - Format dates for display
- `formatCurrency` - Format numbers as currency
- `isValidEmail` - Validate email addresses

### Types (`src/types/`)

TypeScript type definitions and interfaces.

```
types/
├── user.ts              # User-related types
└── index.ts
```

### Constants (`src/constants/`)

Application-wide constants.

```
constants/
└── index.ts             # Routes, API endpoints, storage keys
```

**Includes:**

- Route paths
- API endpoints
- LocalStorage keys
- App configuration

### Tests (`src/tests/`)

Test utilities and configuration.

```
tests/
└── setup.ts             # Vitest setup file
```

### Assets (`src/assets/`)

Static assets like images, fonts, and icons.

```
assets/
└── react.svg
```

## Configuration Files

### TypeScript Configuration

- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - App-specific TypeScript settings (with path aliases)
- `tsconfig.node.json` - Node-specific TypeScript settings

### Build & Development

- `vite.config.ts` - Vite build configuration
- `vitest.config.ts` - Vitest testing configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

### Code Quality

- `eslint.config.js` - ESLint configuration
- `.prettierrc.json` - Prettier code formatting rules
- `.prettierignore` - Files to ignore for Prettier

### Environment

- `.env` - Environment variables (not committed)
- `.env.example` - Example environment variables (committed)

### Version Control

- `.gitignore` - Files to ignore in Git
- `.github/workflows/ci.yml` - GitHub Actions CI pipeline

### Documentation

- `README.md` - Main project documentation
- `CONTRIBUTING.md` - Contribution guidelines
- `PROJECT_STRUCTURE.md` - This file

## File Naming Conventions

### Components

- PascalCase for component files: `Button.tsx`, `MainLayout.tsx`
- Same name for folder and main file
- Tests use `.test.tsx` suffix: `Button.test.tsx`
- Each folder has an `index.ts` for clean exports

### Hooks

- camelCase starting with "use": `useFetch.ts`, `useLocalStorage.ts`

### Utils & Services

- camelCase for files and functions: `formatters.ts`, `exampleService.ts`

### Types

- camelCase for files: `user.ts`
- PascalCase for type names: `User`, `UserFormData`

## Import Aliases

The project uses path aliases for cleaner imports:

```tsx
// Instead of: import { Button } from '../../components/Button'
import { Button } from '@/components';

// Instead of: import { useFetch } from '../../../hooks/useFetch'
import { useFetch } from '@/hooks';
```

The `@/` alias points to the `src/` directory.

## Adding New Features

### 1. New Component

```bash
src/components/NewComponent/
├── NewComponent.tsx
├── NewComponent.test.tsx
└── index.ts
```

Export in `src/components/index.ts`:

```tsx
export { NewComponent } from './NewComponent';
```

### 2. New Page

```bash
src/pages/NewPage/
├── NewPage.tsx
└── index.ts
```

Add route in `src/App.tsx`:

```tsx
<Route path="/new-page" element={<NewPage />} />
```

### 3. New Hook

Create in `src/hooks/useNewHook.ts` and export in `src/hooks/index.ts`

### 4. New Service

Create in `src/services/newService.ts` using the `api` instance

## Best Practices

1. **Separation of Concerns**: Keep components focused on presentation
2. **Reusability**: Extract common logic into hooks and utilities
3. **Type Safety**: Define TypeScript types for all data structures
4. **Testing**: Write tests for components and utilities
5. **Consistency**: Follow established patterns and naming conventions
6. **Documentation**: Comment complex logic and update docs

## Development Workflow

1. Create feature branch
2. Implement feature following structure guidelines
3. Write tests
4. Run linter and tests locally
5. Update documentation if needed
6. Submit pull request
7. CI pipeline runs automatically
8. Code review and merge
