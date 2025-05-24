import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import Loader from '../components/loader';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
