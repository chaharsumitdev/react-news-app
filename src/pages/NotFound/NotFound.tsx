import { Link } from 'react-router-dom';
import { Button } from '@/components';
import { ROUTES } from '@/constants';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-9xl font-bold text-gray-300">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to={ROUTES.HOME}>
        <Button variant="primary" size="lg">
          Go Home
        </Button>
      </Link>
    </div>
  );
};
