import { supabase } from '../supabase/client';
import type { User } from '../types/user';

export const loginUser = async (email: string, password: string): Promise<User> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return { id: data.user.id, email: data.user.email || '', name: data.user.user_metadata?.name || '' };
};

export const registerUser = async (email: string, password: string, name: string): Promise<User> => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });
  if (error) throw error;
  return { id: data.user?.id || '', email, name };
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};