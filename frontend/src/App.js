import logo from './logo.svg';

function App() {
  return (
    <div className="w-full h-screen px-24 bg-gray-800 justify-center items-center">
      <header className="w-full h-full flex flex-col items-center justify-center">
        <img
          src={logo}
          className="h-96 w-96 animate-spin"
          alt="logo"
          draggable="false"
          style={{ animationDuration: "3s" }}
        />
        <p className="text-white">
          Edit <code className="bg-white/30 rounded-lg px-2 py-1 font-bold tracking-wide">src/App.js</code> and save to reload.
        </p>
        <a
          className="mt-12 bg-gray-600/75 hover:bg-gray-600/30 text-gray-200 hover:text-gray-50 py-2 px-4 text-lg rounded-xl transition-all duration-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
