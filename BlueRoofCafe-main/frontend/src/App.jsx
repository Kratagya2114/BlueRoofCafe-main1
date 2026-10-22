import { Outlet, ScrollRestoration } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import BackToTopButton from './components/Shared/BackToTopButton';

// Layout shared by every page: preloader, navbar, routed page, footer.
function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
      <ScrollRestoration />
    </>
  );
}

export default App;
