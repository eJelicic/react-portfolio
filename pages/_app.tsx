import '../styles/globals.css';
import { DarkModeProvider } from '../components/darkModeProvider';

interface AppProps {
  Component: React.ElementType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
