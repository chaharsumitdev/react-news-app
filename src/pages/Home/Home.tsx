import { Button, Card } from '@/components';

export const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to React Boilerplate
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern, production-ready React starter template
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card title="Vite">
          <p className="text-gray-600">
            Lightning-fast build tool and dev server for modern web projects.
          </p>
        </Card>
        <Card title="React 19">
          <p className="text-gray-600">
            The latest version of React with improved performance and features.
          </p>
        </Card>
        <Card title="TypeScript">
          <p className="text-gray-600">
            Type-safe development with enhanced IDE support and fewer bugs.
          </p>
        </Card>
        <Card title="React Router">
          <p className="text-gray-600">
            Declarative routing for React applications with nested routes.
          </p>
        </Card>
        <Card title="Tailwind CSS">
          <p className="text-gray-600">
            Utility-first CSS framework for rapid UI development.
          </p>
        </Card>
        <Card title="Vitest">
          <p className="text-gray-600">
            Blazing fast unit test framework powered by Vite.
          </p>
        </Card>
      </section>
    </div>
  );
};
