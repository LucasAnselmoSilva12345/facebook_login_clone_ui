import ThemeContainer from '../contexts/theme/ThemeContainer';

import '../components/linha.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}

export default MyApp;
