import { Link, useLocation } from "react-router-dom";
import webLogo from "../assets/logo/dental-logo-1.png";
import { useEffect } from "react";

const Header = () => {
  //whenever page change useeffect will scroll page to top
  const location = useLocation();
  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [location.pathname]);

  return (
    <>
      <header className="sticky top-0 z-10">
        {/* top bar header  */}
        <div className="bg-white border border-t-none shadow p-4">
          <div className="flex items-center flex-wrap justify-between w-[95%] mx-auto gap-4 lg:gap-0">
            <Link to={"/"}>
              <div className="w-36 order-1">
                <img src={webLogo} className="w-full h-full" alt="LOGO" />
              </div>
            </Link>
            {/* search-box  */}
            <div className="w-full order-3 lg:w-[35rem] lg:block lg:order-2">
              <div className="flex shadow-sm">
                <input
                  placeholder="Search Product, Category, Brand..."
                  className="py-1 indent-2 border rounded-s-lg focus:outline-none w-full bg-gray-100"
                  type="search"
                />
                <button className="py-1 rounded-e-lg text-white bg-secondary-theme flex justify-center items-center w-10 h-10">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 transition"
                    fill="currentColor"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* other options  */}
            <div className="w-auto flex items-center gap-7 order-2 lg:order-3">
              <Link
                to={"tel: +91-74281-84111"}
                className="lg:flex items-center gap-3 group hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Helpline</p>
                  <p className="font-semibold text-sm group-hover:text-theme transition duration-200 ease-in">
                    +91-74281-84111
                  </p>
                </div>
              </Link>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* menu bar list  */}
      <div className="bg-lightGray">
        <div className="w-[95%] no-scrollbar mx-auto p-4 menu-list overflow-x-scroll lg:overflow-x-hidden">
          <ul className="flex items-center text-nowrap gap-5">
            <Link>
              <li className="w-full uppercase text-sm md:text-md lg:text-md text-gray-400 hover:text-black transition duration-300 ease-in cursor-pointer tracking-wide active">
                Shop by brands
              </li>
            </Link>
            <Link>
              <li className="uppercase text-sm md:text-md lg:text-md text-gray-400 hover:text-black transition duration-300 ease-in cursor-pointer tracking-wide">
                shop by category
              </li>
            </Link>
            <Link>
              <li className="uppercase text-sm md:text-md lg:text-md text-gray-400 hover:text-black transition duration-300 ease-in cursor-pointer tracking-wide">
                all proudcts
              </li>
            </Link>
            <Link>
              <li className="uppercase text-sm md:text-md lg:text-md text-gray-400 hover:text-black transition duration-300 ease-in cursor-pointer tracking-wide">
                blogs
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
