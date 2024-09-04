import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'
import clsx from "clsx";
// clsx pequena utilidade JavaScript que facilita a manipulação de classes CSS
import { ClerkProvider } from '@clerk/nextjs'
// clerk biblioteca que facilita a implementação de autenticação e gerenciamento de usuários em aplicações web
import { ptBR } from "@clerk/localizations";
// Deixando o menu do clerk em português

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BTLoja",
  description: "Next E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
    <html lang="en">
      <body className={clsx(inter.className, 'bg-slate-700')}>
        <Navbar />
        <main className='bg-slate-700 h-screen p-16'>{children}</main>
      </body>
    </html>
    </ClerkProvider> 
  );
}
