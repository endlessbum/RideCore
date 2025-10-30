import React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { Button } from '@radix-ui/themes';

interface AuthFormProps {
  onSubmit: SubmitHandler<{email: string, password: string, name?: string}>;
  isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isLogin }) => {
  const { register, handleSubmit } = useForm<{ email: string; password: string; name?: string }>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {!isLogin && (
        <input {...register('name')} type="text" placeholder="Имя" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" />
      )}
      <input {...register('email')} type="email" placeholder="Электронная почта" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" required />
      <input {...register('password')} type="password" placeholder="Пароль" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" required />
      <Button type="submit" size="4" className="w-full">{isLogin ? 'Войти' : 'Регистрация'}</Button>
    </form>
  );
};

export default AuthForm;