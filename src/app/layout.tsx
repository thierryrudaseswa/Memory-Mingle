"use client"; // This makes the component a Client Component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:3000/backend/api/checkAuth', {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          router.push('/');
        } else {
          router.push('/Signup');
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        router.push('/Signup');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Header />
            {children}
            <Footer />
          </QueryClientProvider>
        </AuthProvider>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </html>
  );
}
