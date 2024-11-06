import './index.css'; // Caminho para o seu arquivo CSS global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
