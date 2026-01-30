import type { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '@/constants';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={ROUTES.HOME} className="text-2xl font-bold text-blue-600">
              React Boilerplate
            </Link>
            <div className="flex gap-6">
              <Link
                to={ROUTES.HOME}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to={ROUTES.ABOUT}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                to={ROUTES.DASHBOARD}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {children || <Outlet />}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} React Boilerplate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
