import '../styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import { Audiowide } from '@next/font/google';
import { Kaushan_Script } from '@next/font/google';

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide'
})

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kaushan'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${audiowide.variable} font-sans`}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>

  );
}
