import '../styles/globals.css'
import { AppWrapper } from '../context/state';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import UglyModal from '../components/UglyModal';

function MyApp({ Component, pageProps }) {

  return (
    <AppWrapper>
      <Layout>
        <Navbar />
        <UglyModal />
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp
