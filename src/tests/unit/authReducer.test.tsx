import authReducer, { login, logout } from '../../store/authSlice';

test('handles login', () => {
  const user = { id: '1', email: 'test@example.com', name: 'Test' };
  const state = authReducer(undefined, login(user));
  expect(state.user).toEqual(user);
  expect(state.isAuthenticated).toBe(true);
});

test('handles logout', () => {
  const state = authReducer({ user: { id: '1', email: 'test@example.com', name: 'Test' }, isAuthenticated: true }, logout());
  expect(state.user).toBeNull();
  expect(state.isAuthenticated).toBe(false);
});