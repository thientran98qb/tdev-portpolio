import clientApolo from '@/services/apoloClient';
import WrapperContext from '@/stores/WrapperContext';
import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
// pages/_app.js
import { Shantell_Sans } from 'next/font/google';
import 'react-vertical-timeline-component/style.min.css';
const inter = Shantell_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${inter.variable} font-sans bg-slate-100`}>
    <ApolloProvider client={clientApolo}>
      <WrapperContext>
        <Component {...pageProps} />
      </WrapperContext>
    </ApolloProvider>
  </main>
}
