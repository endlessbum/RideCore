import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { RootState } from '../store/store';

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-8">Профиль</h1>
          <p className="text-gray-600">Пожалуйста, войдите, чтобы просмотреть профиль.</p>
          <Button asChild className="mt-4">
            <a href="/login">Войти</a>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-bold text-black mb-8">Профиль</h1>
          <p className="text-gray-600 mb-4">Имя: {user.name}</p>
          <p className="text-gray-600 mb-8">Электронная почта: {user.email}</p>
          <Button onClick={handleLogout} size="4">Выйти</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;