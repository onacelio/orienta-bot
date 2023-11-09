'use client';
import { ReactNode } from 'react';
import { GlobalStyles } from '@/styles';
import { styleGuide } from '@/styles/style-guide';
import { Archivo } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/register';
import { Footer, HeaderHome } from '@/components';

const archivo = Archivo({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Orienta Bot</title>
        <meta name="description" content="descrição do projeto." />
      </head>
      <body className={archivo.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={styleGuide}>
            <GlobalStyles />
            <HeaderHome />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
