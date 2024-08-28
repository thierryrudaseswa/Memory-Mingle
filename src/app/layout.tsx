"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated
    const checkAuth = async () => {
      try {
        // Attempt to retrieve the token from cookies
        const res = await fetch('http://localhost:3000/backend/api/checkAuth', {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          // User is authenticated, redirect to the landpage
          router.push('/');
          // window.location.reload();
        } else {
          // User is not authenticated, redirect to the Signup page
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
    // Optionally, you can show a loading spinner while checking auth status
    return <div>Loading...</div>;
  }

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
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
