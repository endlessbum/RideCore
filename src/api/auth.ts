// Mock API for auth (integrate with Supabase)
export const authenticate = async (email: string) => {
  // Simulate API call
  return { id: '1', email, name: 'User' };
};