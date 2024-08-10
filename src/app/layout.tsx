// src/app/layout.tsx
'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import ClientLayout from './ClientLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useQuery } from 'react-query';

const inter = Inter({ subsets: ["latin"] });

// Create an instance of QueryClient
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {/* <ClientLayout> */}
          <Header />
          {children}
          <Footer />
          {/* </ClientLayout> */}
        </QueryClientProvider>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
}
