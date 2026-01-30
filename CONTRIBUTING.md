# Contributing to React Boilerplate

Thank you for your interest in contributing! Here are some guidelines to help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Start development server: `npm run dev`

## Code Style

- Follow the existing code style
- Use TypeScript for all new code
- Write meaningful commit messages
- Add tests for new features
- Ensure all tests pass before submitting PR

## Testing

- Write unit tests for components using Vitest and React Testing Library
- Run tests: `npm test`
- Check coverage: `npm run test:coverage`
- Aim for high test coverage

## Pull Request Process

1. Update README.md with details of changes if needed
2. Ensure all tests pass and linter is clean
3. Update the documentation if you're changing functionality
4. The PR will be merged once you have approval

## Project Structure Guidelines

- **Components**: Reusable UI components in `src/components/`
- **Pages**: Page-level components in `src/pages/`
- **Hooks**: Custom hooks in `src/hooks/`
- **Utils**: Utility functions in `src/utils/`
- **Types**: TypeScript types in `src/types/`
- Each component should have its own folder with index.ts for exports
- Add tests alongside components (ComponentName.test.tsx)

## Commit Message Format

Use descriptive commit messages:

```
feat: add new button component
fix: resolve routing issue
docs: update README
test: add tests for Card component
refactor: improve performance of useFetch hook
```

## Questions?

Feel free to open an issue for any questions or concerns!
