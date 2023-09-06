import '../styles/globals.css';

interface AppProps {
  Component: React.ElementType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
