import { Link } from "react-router-dom";

const UserInfo = ({ token }) => {
  if (token) {
    return (
      <>
        <button className="group flex items-center space-x-2 bg-[#F54748] hover:bg-red-600 transition-all cursor-pointer text-white text-sm font-semibold py-2 px-4 rounded-full" type="button" id="logout">
          <i className="ri-logout-box-r-line transition-all duration-300 group-hover:pr-[.3rem]"></i>
          <span>Logout</span>
        </button>
        <button className="cursor-pointer" onClick={() => window.location.href = 'http://localhost:3000/cart'}>
          <i className="relative ri-shopping-cart-line">
            {localStorage.getItem('Cart') && window.location.pathname !== '/cart' && (
              <>
                <span className="absolute -right-2.5 -top-2.5 inline-flex size-3 animate-ping rounded-full bg-[#F54748] opacity-75"></span>
                <span className="absolute -right-2 -top-2 inline-flex size-2 rounded-full bg-red-600"></span>
              </>
            )}
          </i>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className="group flex items-center space-x-2 bg-[#F54748] hover:bg-red-600 transition-all cursor-pointer text-white text-sm font-semibold py-2 px-4 rounded-full" type="button" id="signin">
          <i className="ri-login-circle-line transition-all duration-300 group-hover:pr-[.3rem]"></i>
          <span>Sign in</span>
        </button>
      </>
    );
  }
};

const Header = () => {
  const token = localStorage.getItem('token');

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <img alt="Resto app logo" className="w-16 h-16" src="http://localhost:8000/storage/assets/logo/restoApp.svg" draggable="false" />
            <a href="/" className="font-bold text-black text-2xl hover:text-red-600 transition-all">Resto app</a>
          </div>
          <div className="hidden md:flex gap-x-8 font-semibold text-black text-sm">
            <Link className="hover:text-red-600 transition-all" to="/">Home</Link>
            <Link className="hover:text-red-600 transition-all" to="/menu">Menu</Link>
            <Link className="hover:text-red-600 transition-all" to="/about">About</Link>
            <Link className="hover:text-red-600 transition-all" to="/contact">Contact</Link>
          </div>
          <div className="flex space-x-6 items-center">
            <UserInfo token={token} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
