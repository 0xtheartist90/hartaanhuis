import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, Delicious_Handrawn } from 'next/font/google';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

const deliciousHandrawn = Delicious_Handrawn({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-delicious',
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'Hart aan Huis - Persoonlijke thuiszorg en begeleiding',
    description: 'Persoonlijke thuiszorg en begeleiding met aandacht, vertrouwen en warmte in Helmond, Laarbeek, Nuenen en Geldrop-Mierlo.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html suppressHydrationWarning lang='nl'>
            <body
                className={`${inter.variable} ${deliciousHandrawn.variable} font-sans bg-background text-foreground overscroll-none antialiased`}>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
