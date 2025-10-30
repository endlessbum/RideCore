import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../store/authSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (data: {email: string, password: string, name?: string}) => {
    try {
      // Simulate auth
      const user = { id: '1', email: data.email, name: data.name || 'Пользователь' };
      dispatch(login(user));
      toast.success(`${isLogin ? 'Вход выполнен' : 'Регистрация выполнена'} успешно!`);
      navigate('/');
    } catch (error) {
      toast.error('Ошибка аутентификации');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-black text-center mb-12">{isLogin ? 'Вход' : 'Регистрация'}</h1>
          <AuthForm onSubmit={handleSubmit} isLogin={isLogin} />
          <p className="text-center mt-4">
            {isLogin ? "Нет аккаунта?" : 'Уже есть аккаунт?'}{' '}
            <button onClick={() => setIsLogin(!isLogin)} className="text-black underline">
              {isLogin ? 'Регистрация' : 'Вход'}
            </button>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;