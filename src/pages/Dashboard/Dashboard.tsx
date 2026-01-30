import { useState } from 'react';
import { Button, Card, LoadingSpinner } from '@/components';
import { useFetch } from '@/hooks';
import { exampleService } from '@/services/exampleService';

export const Dashboard = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Example of using the custom useFetch hook
  const { data, loading, error, refetch } = useFetch(
    () => exampleService.getUsers(),
    []
  );

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <Button onClick={handleRefresh} isLoading={isRefreshing}>
          Refresh Data
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Users">
          <p className="text-4xl font-bold text-blue-600">0</p>
          <p className="text-gray-500 mt-2">Active users</p>
        </Card>
        <Card title="Projects">
          <p className="text-4xl font-bold text-green-600">0</p>
          <p className="text-gray-500 mt-2">In progress</p>
        </Card>
        <Card title="Tasks">
          <p className="text-4xl font-bold text-purple-600">0</p>
          <p className="text-gray-500 mt-2">Pending</p>
        </Card>
      </div>

      <Card title="Data Fetching Example">
        {loading ? (
          <div className="py-8">
            <LoadingSpinner size="lg" />
          </div>
        ) : error ? (
          <div className="text-red-600">
            <p>Error: {error.message}</p>
            <p className="text-sm text-gray-600 mt-2">
              Note: This is expected since we're using a placeholder API endpoint.
              Replace the API URL in services/api.ts with your actual backend.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-gray-700 mb-4">
              This demonstrates the custom useFetch hook and Axios service setup.
            </p>
            <pre className="bg-gray-50 p-4 rounded text-sm overflow-x-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </Card>
    </div>
  );
};
