import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen px-24 bg-gray-800">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
