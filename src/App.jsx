import "./App.css";

const BackToTopIcon = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M2.019 11.993c0 5.518 4.48 9.998 9.998 9.998 5.517 0 9.997-4.48 9.997-9.998s-4.48-9.998-9.997-9.998c-5.518 0-9.998 4.48-9.998 9.998zm1.5 0c0-4.69 3.808-8.498 8.498-8.498s8.497 3.808 8.497 8.498-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498zm4.715-1.528s1.505-1.502 3.259-3.255c.147-.146.338-.219.53-.219s.384.073.53.219c1.754 1.753 3.259 3.254 3.259 3.254.145.145.217.336.216.527 0 .191-.074.383-.22.53-.293.293-.766.294-1.057.004l-1.978-1.978v6.694c0 .413-.336.75-.75.75s-.75-.337-.75-.75v-6.694l-1.978 1.979c-.29.289-.762.286-1.055-.007-.147-.146-.22-.338-.221-.53-.001-.19.071-.38.215-.524z"
      clipRule="evenodd"
    />
  </svg>
);
function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
          <a href="#home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="#testimony" className="text-white hover:text-gray-300">
            Testimony
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </nav>
      <div className="md:hidden"></div>
      <div
        id="home"
        className="text-center flex items-center justify-center h-screen bg-gray-900"
      >
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
      <div
        id="about"
        className="text-center flex flex-col items-center justify-center h-screen bg-gray-900"
      >
        <div className="max-w-md">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About
          </h1>
          <div className="flex justify-center">
            {/* <img
              src="src/img/tech-stack.png"
              alt="Logo"
              className="w-32 h-32 mt-4"
            /> */}
          </div>
          <p className="mt-6 text-lg leading-8 text-white">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <a
            href="https://tailwindcss.com/"
            className="text-xl font-semibold leading-6 text-white hover:text-gray-200 mt-6 block"
          >
            Learn more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div
        id="services"
        className="text-center flex items-center justify-center h-screen bg-gray-900"
      >
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
      <div id="testimony" className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What Our Clients Say
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              See what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg leading-7 font-semibold text-white">
                      Amazing service and quality work!
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      John Doe, CEO of Acme Inc.
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg leading-7 font-semibold text-white">
                      The best solution for your work needs!
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      John Doe, Software Engineer
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg leading-7 font-semibold text-white">
                      Highly recommended for all your web needs!
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Jane Smith, Marketing Manager at XYZ Corp.
                    </div>
                  </div>
                </div>
              </li>
              <li className="mt-5">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg leading-7 font-semibold text-white">
                      Very satisfactory service! I was very impressed with their
                      professionalism and quality of work.{" "}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Jane Smith, Marketing Manager at XYZ Corp.
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="text-center flex items-center justify-center h-screen bg-gray-900"
      >
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
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-white font-bold mb-2">About Us</h3>
              <p className="text-gray-400">
                We are a team of passionate developers dedicated to creating
                high-quality websites and applications.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-white font-bold mb-2">Contact</h3>
              <p className="text-gray-400">Email: info@example.com</p>
              <p className="text-gray-400">Phone: +1 (555) 555-5555</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-white font-bold mb-2">Follow Us</h3>
              <div className="flex">
                <a
                  href="https://github.com/AlpianPPLG"
                  className="text-gray-400 hover:text-white mr-4"
                >
                  <i className="fab fa-github hover:text-white"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="hover:text-white"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/Nova-Pratama.id"
                  className="text-gray-400 hover:text-white mr-4"
                >
                  <i className="fab fa-facebook hover:text-white"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="hover:text-[#3b5998]"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/_ubermensch7/"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-instagram hover:text-white"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="hover:text-white"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-center">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <button className="text-white md:text-1xl hover:bg-sky-400 hover:text-gray-900 fixed top-0 right-0 m-4 bg-sky-500 p-2 rounded-md shadow-md">
        Login
        <span aria-hidden="true">→</span>
      </button>
      <button
        className="text-white hover:bg-sky-400 hover:text-gray-900 fixed bottom-4 right-4 bg-sky-500 p-2 rounded-md shadow-md"
        onClick={scrollToTop}
      >
        <BackToTopIcon />
      </button>
    </>
  );
}

export default App;
