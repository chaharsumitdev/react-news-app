import { Card } from '@/components';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About This Boilerplate</h1>

      <Card>
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ <strong>Vite</strong> - Next generation frontend tooling</li>
          <li>✅ <strong>React 19</strong> - Latest React with TypeScript</li>
          <li>✅ <strong>React Router</strong> - Client-side routing</li>
          <li>✅ <strong>Axios</strong> - HTTP client with interceptors</li>
          <li>✅ <strong>Tailwind CSS</strong> - Utility-first CSS</li>
          <li>✅ <strong>Vitest</strong> - Fast unit testing</li>
          <li>✅ <strong>React Testing Library</strong> - Component testing</li>
        </ul>
      </Card>

      <Card>
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
          {`src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── layouts/        # Layout components
├── hooks/          # Custom React hooks
├── services/       # API services
├── utils/          # Utility functions
├── types/          # TypeScript type definitions
├── constants/      # App constants
└── tests/          # Test setup and utilities`}
        </pre>
      </Card>

      <Card>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-2 text-gray-700">
          <li>🚀 Fast development with Hot Module Replacement</li>
          <li>📦 Optimized production builds</li>
          <li>🎨 Modern, responsive UI with Tailwind CSS</li>
          <li>🔒 Type-safe with TypeScript</li>
          <li>🧪 Testing setup with Vitest</li>
          <li>📡 Axios with request/response interceptors</li>
          <li>🗂️ Well-organized folder structure</li>
          <li>♻️ Reusable hooks and utilities</li>
        </ul>
      </Card>
    </div>
  );
};
