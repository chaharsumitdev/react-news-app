# React Boilerplate - Vite + React + TypeScript

A modern, production-ready React boilerplate with all the essential tools and best practices built-in.

## 🚀 Tech Stack

- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[React 19](https://react.dev/)** - The latest version of React
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React Router](https://reactrouter.com/)** - Declarative routing for React
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Latest version with @tailwindcss/postcss
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[React Testing Library](https://testing-library.com/react)** - Testing utilities for React

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Button/
│   ├── Card/
│   └── LoadingSpinner/
├── pages/             # Page components
│   ├── Home/
│   ├── About/
│   ├── Dashboard/
│   └── NotFound/
├── layouts/           # Layout components
│   └── MainLayout/
├── hooks/             # Custom React hooks
│   ├── useFetch.ts
│   └── useLocalStorage.ts
├── services/          # API services & Axios configuration
│   ├── api.ts
│   └── exampleService.ts
├── utils/             # Utility functions
│   ├── formatters.ts
│   └── validators.ts
├── types/             # TypeScript type definitions
│   ├── user.ts
│   └── index.ts
├── constants/         # App constants
│   └── index.ts
├── tests/             # Test setup and utilities
│   └── setup.ts
└── assets/            # Static assets (images, fonts, etc.)
```

## 🎯 Features

- ⚡️ **Lightning Fast HMR** with Vite
- 🎨 **Modern UI** with Tailwind CSS
- 🔒 **Type Safety** with TypeScript
- 🧪 **Testing Ready** with Vitest & React Testing Library
- 📡 **API Integration** with Axios (interceptors included)
- 🗂️ **Clean Architecture** with feature-based folder structure
- ♻️ **Reusable Components** and custom hooks
- 🎯 **Path Aliases** configured (@/ for src/)
- 📱 **Responsive Design** out of the box
- 🔄 **React Router** setup with nested routes

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd vite-boilerplate-react
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:

```env
VITE_API_BASE_URL=https://your-api-url.com
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🧪 Testing

Run tests:

```bash
npm test
```

Run tests with UI:

```bash
npm run test:ui
```

Run tests with coverage:

```bash
npm run test:coverage
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## 🔧 Configuration

### Axios Configuration

The Axios instance is pre-configured with:

- Base URL from environment variables
- Request/response interceptors
- Automatic token injection
- Error handling

Located at: `src/services/api.ts`

### Path Aliases

The `@/` alias is configured to point to the `src/` directory:

```typescript
import { Button } from '@/components';
import { useFetch } from '@/hooks';
```

### Tailwind Configuration

This project uses Tailwind CSS v4 with the new `@tailwindcss/postcss` plugin.

Custom utilities are defined in `src/index.css`:

- `.btn-primary` - Primary button styles
- `.btn-secondary` - Secondary button styles
- `.card` - Card component styles

The new v4 syntax uses `@import "tailwindcss"` instead of the old `@tailwind` directives.

## 📦 Component Examples

### Button Component

```tsx
import { Button } from '@/components';

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>;
```

### Custom Hook Example

```tsx
import { useFetch } from '@/hooks';
import { exampleService } from '@/services/exampleService';

const { data, loading, error, refetch } = useFetch(() => exampleService.getUsers(), []);
```

## 🎨 Styling

This boilerplate uses Tailwind CSS for styling. You can:

1. Use utility classes directly in your components
2. Create custom utilities in `src/index.css`
3. Extend the Tailwind configuration in `tailwind.config.js`

## 🔐 Environment Variables

All environment variables must be prefixed with `VITE_` to be exposed to the client:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=My App
```

Access them in your code:

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

MIT License - feel free to use this boilerplate for your projects!

---

Built with ❤️ using Vite + React + TypeScript
