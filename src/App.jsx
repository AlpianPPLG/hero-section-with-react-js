function App() {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 md:hidden bg-gradient-to-r bg-gray-900">
        <div className="space-y-1 cursor-pointer">
          <div className="w-6 h-0.5 bg-white sm:w-8 sm:h-1"></div>
          <div className="w-6 h-0.5 bg-white sm:w-8 sm:h-1"></div>
          <div className="w-6 h-0.5 bg-white sm:w-8 sm:h-1"></div>
        </div>
      </div>
      <nav className="hidden md:flex justify-center items-center px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </nav>
      <div className="md:hidden"></div>
      <div className="text-center flex items-center justify-center h-screen bg-gray-900">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <button className="bg-white hover:bg-gray-200 text-indigo-600 font-bold py-2 px-4 rounded mt-4 mr-4">
            Get Started
          </button>
          <button className="text-xl font-semibold leading-6 text-white hover:text-gray-200 mt-4">
            Learn more
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div className="md:hidden"></div>
      <div className="text-center flex items-center justify-center h-screen bg-gray-900">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
      <div className="text-center flex items-center justify-center h-screen bg-gray-900">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            We offer a wide range of services to help your business grow and
            succeed.
          </p>
          <ul className="mt-8 space-y-4 text-left text-white">
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-2">
                <svg
                  className="h-6 w-6 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>Web Design and Development</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-2">
                <svg
                  className="h-6 w-6 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>Digital Marketing</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-2">
                <svg
                  className="h-6 w-6 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>Search Engine Optimization (SEO)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center flex items-center justify-center h-screen bg-gray-900">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Get in touch with us for more information or inquiries.
          </p>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <button className="text-white md:text-1xl hover:bg-gray-400 hover:text-gray-900 fixed top-0 right-0 m-4 bg-gray-900 p-2 rounded-md shadow-md">
        Login
        <span aria-hidden="true">→</span>
      </button>
    </>
  );
}

export default App;
