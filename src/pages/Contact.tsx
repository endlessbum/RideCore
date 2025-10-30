import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@radix-ui/themes';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const contactSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  email: z.string().email('Неверный email'),
  message: z.string().min(10, 'Сообщение должно содержать не менее 10 символов')
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    toast.success('Сообщение отправлено успешно!');
    reset();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-black text-center mb-12">Свяжитесь с нами</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
              <input
                {...register('name')}
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Электронная почта</label>
              <input
                {...register('email')}
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" size="4" className="w-full">Отправить сообщение</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;