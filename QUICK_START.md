# Quick Start Guide

Get up and running in minutes!

## 🚀 Start Development

```bash
npm run dev
```

Visit: `http://localhost:5173`

## 📁 Where to Find Things

| What                 | Where                           |
| -------------------- | ------------------------------- |
| **Add a component**  | `src/components/ComponentName/` |
| **Add a page**       | `src/pages/PageName/`           |
| **Add a hook**       | `src/hooks/useHookName.ts`      |
| **Add API methods**  | `src/services/serviceName.ts`   |
| **Add utilities**    | `src/utils/utilName.ts`         |
| **Add types**        | `src/types/typeName.ts`         |
| **Configure routes** | `src/App.tsx`                   |
| **Style globally**   | `src/index.css`                 |
| **Environment vars** | `.env`                          |

## 🎯 Common Tasks

### Create a New Component

```bash
# 1. Create folder structure
mkdir -p src/components/MyComponent
touch src/components/MyComponent/{MyComponent.tsx,MyComponent.test.tsx,index.ts}
```

```typescript
// src/components/MyComponent/MyComponent.tsx
export const MyComponent = () => {
  return <div>My Component</div>;
};

// src/components/MyComponent/index.ts
export { MyComponent } from './MyComponent';

// src/components/index.ts (add export)
export { MyComponent } from './MyComponent';
```

### Add a New Route

```typescript
// src/App.tsx
import { MyPage } from '@/pages';

<Route path="/my-page" element={<MyPage />} />
```

### Call an API

```typescript
// src/services/myService.ts
import api from './api';

export const myService = {
  getData: async () => {
    const response = await api.get('/endpoint');
    return response.data;
  },
};

// In a component
import { useFetch } from '@/hooks';
import { myService } from '@/services/myService';

const { data, loading, error } = useFetch(() => myService.getData(), []);
```

### Style with Tailwind

```tsx
// Use utility classes
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold text-gray-900">Title</h1>
</div>

// Or use custom classes (defined in src/index.css)
<button className="btn-primary">Click me</button>
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Adding Dependencies

```bash
# Production dependency
npm install package-name

# Development dependency
npm install -D package-name
```

## 🎨 Customization

### Change API URL

Edit `.env`:

```env
VITE_API_BASE_URL=https://your-api.com
```

### Modify Tailwind Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    },
  },
}
```

### Add Custom Styles

Edit `src/index.css`:

```css
.my-custom-class {
  @apply px-4 py-2 bg-blue-500 text-white;
}
```

## 💡 Import Examples

```typescript
// Components
import { Button, Card } from '@/components';

// Hooks
import { useFetch, useLocalStorage } from '@/hooks';

// Services
import { exampleService } from '@/services/exampleService';

// Utils
import { formatDate, isValidEmail } from '@/utils';

// Constants
import { ROUTES, API_ENDPOINTS } from '@/constants';

// Types
import type { User } from '@/types';
```

## 🔧 Scripts Reference

| Command                 | Description              |
| ----------------------- | ------------------------ |
| `npm run dev`           | Start development server |
| `npm run build`         | Build for production     |
| `npm run preview`       | Preview production build |
| `npm test`              | Run tests                |
| `npm run test:ui`       | Run tests with UI        |
| `npm run test:coverage` | Run tests with coverage  |
| `npm run lint`          | Run ESLint               |

## 📖 Need More Help?

- **Detailed structure**: See `PROJECT_STRUCTURE.md`
- **Full documentation**: See `README.md`
- **Setup info**: See `SETUP_SUMMARY.md`
- **Contributing**: See `CONTRIBUTING.md`

## ⚡ Pro Tips

1. **Use path aliases**: `@/` instead of `../../`
2. **Keep components small**: One responsibility per component
3. **Write tests**: Test as you build
4. **Use TypeScript**: Add types for better DX
5. **Follow patterns**: Look at existing code for examples
6. **Extract logic**: Use custom hooks for reusable logic
7. **Centralize**: Keep constants, types, and services organized

---

**Happy coding! 🎉**
