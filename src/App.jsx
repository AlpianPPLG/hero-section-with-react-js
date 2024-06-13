function App() {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 md:hidden">
        <div className="space-y-1 cursor-pointer">
          <div className="w-6 h-0.5 bg-gray-900"></div>
          <div className="w-6 h-0.5 bg-gray-900"></div>
          <div className="w-6 h-0.5 bg-gray-900"></div>
        </div>
      </div>
      <div className="hidden md:flex justify-center gap-4">
        <a href="#">
          <nav
            className="text-gray-900 md:text-1xl hover:text-blue-500"
            style={{ display: "inline" }}
          >
            Product
          </nav>
        </a>
        <a href="#">
          <nav
            className="text-gray-900 md:text-1xl hover:text-blue-500"
            style={{ display: "inline" }}
          >
            Features
          </nav>
        </a>
        <a href="#">
          <nav
            className="text-gray-900 md:text-1xl hover:text-blue-500"
            style={{ display: "inline" }}
          >
            Marketplace
          </nav>
        </a>
        <a href="#">
          <nav
            className="text-gray-900 md:text-1xl hover:text-blue-500"
            style={{ display: "inline" }}
          >
            Company
          </nav>
        </a>
      </div>
      <div className="text-center flex items-center justify-center h-screen">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded mt-4 mr-4">
            Get Started
          </button>
          <button className="text-xl font-semibold leading-6 text-gray-900 hover:text-gray-600 mt-4">
            Learn more
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <a
          href="#"
          className="text-white md:text-1xl hover:bg-gray-400 hover:text-gray-900 fixed top-0 right-0 m-4 bg-gray-900 p-2 rounded-md shadow-md"
        >
          Login
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}

export default App;
