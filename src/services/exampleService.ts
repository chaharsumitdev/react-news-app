import api from './api';
import type { User } from '@/types/user';

export const exampleService = {
  // GET example
  getUsers: async (): Promise<User[]> => {
    const response = await api.get<User[]>('/users');
    return response.data;
  },

  // GET by ID example
  getUserById: async (id: string): Promise<User> => {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  },

  // POST example
  createUser: async (userData: Omit<User, 'id'>): Promise<User> => {
    const response = await api.post<User>('/users', userData);
    return response.data;
  },

  // PUT example
  updateUser: async (id: string, userData: Partial<User>): Promise<User> => {
    const response = await api.put<User>(`/users/${id}`, userData);
    return response.data;
  },

  // DELETE example
  deleteUser: async (id: string): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};
