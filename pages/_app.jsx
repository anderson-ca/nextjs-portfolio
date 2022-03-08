import '../styles/globals.css'
import { AppWrapper } from '../context/state';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {

  return (
    <AppWrapper>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp
