import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Assuming Navbar and Footer components exist in the @/components directory
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Google's Gemini 3.0: The Most Powerful LLM Ever",
  description: "An AI-powered app generation platform with an interactive code editor, real-time preview, version control, multi-modal input, collaborative workspace, and deployment to Git.",
  keywords: ["AI app generator", "LLM", "Gemini 3.0", "Next.js", "Tailwind CSS", "code editor", "real-time preview", "collaboration", "version control", "multi-modal input"],
  author: "AI Powered App Generator",
  openGraph: {
    title: "Google's Gemini 3.0: The Most Powerful LLM Ever",
    description: "An AI-powered app generation platform with an interactive code editor, real-time preview, version control, multi-modal input, collaborative workspace, and deployment to Git.",
    url: "https://gemini-3-app-generator.com", // Replace with your actual app URL
    siteName: "Gemini 3.0 App Generator",
    images: [
      {
        url: "https://gemini-3-app-generator.com/og-image.jpg", // Replace with your actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Gemini 3.0 App Generator Dashboard",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Google's Gemini 3.0: The Most Powerful LLM Ever",
    description: "An AI-powered app generation platform with an interactive code editor, real-time preview, version control, multi-modal input, collaborative workspace, and deployment to Git.",
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
    images: ['https://gemini-3-app-generator.com/twitter-image.jpg'], // Replace with your actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}