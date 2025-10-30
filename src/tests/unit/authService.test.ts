import { describe, it, expect, vi } from 'vitest';

// Mock the supabase client module
vi.mock('../../supabase/client', () => {
  return {
    supabase: {
      auth: {
        signInWithPassword: vi.fn(async (payload: any) => ({ data: { user: { id: 'u1', email: payload?.email || 'a@b.com' } }, error: null })),
        signUp: vi.fn(async (payload: any) => ({ data: { user: { id: 'u2', email: payload?.email || '' } }, error: null })),
        signOut: vi.fn(async () => ({ error: null })),
      }
    }
  };
});

import { loginUser, registerUser, logoutUser } from '../../services/authService';

describe('authService', () => {
  it('logs in user and returns user object', async () => {
    const user = await loginUser('a@b.com', 'pass');
    expect(user).toHaveProperty('id', 'u1');
    expect(user).toHaveProperty('email', 'a@b.com');
  });

  it('registers user and returns user object', async () => {
    const user = await registerUser('x@y.com', 'pw', 'Name');
    expect(user).toHaveProperty('email', 'x@y.com');
  });

  it('logs out without throwing', async () => {
    await expect(logoutUser()).resolves.not.toThrow();
  });
});
