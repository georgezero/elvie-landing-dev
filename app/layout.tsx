import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'ELVIE — Medical Imaging Meets Clinical Intelligence',
  description: 'ELVIE connects reports, images, documents, and AI in a single workspace so clinicians can move from findings to understanding faster.',
  keywords: ['radiology', 'PACS', 'clinical intelligence', 'DICOM', 'AI', 'medical imaging'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="command">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
