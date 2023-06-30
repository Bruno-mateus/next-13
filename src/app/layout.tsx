import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Next 13",
    template:"%s | Next 13"
    
  },

  description: "App create with next 13",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
