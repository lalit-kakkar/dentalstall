import { Link } from "react-router-dom";
import webLogo from "../assets/logo/dental-logo-1.png";
import playStore from "../assets/logo/google.png";
import appStore from "../assets/logo/apple.png";
import { memo } from "react";

const Footer = () => {
  return (
    <footer className="bg-theme pt-20 pb-8 lg:px-8">
      <div className="w-[95%] mx-auto lg:p-4">
        <div className="flex md:flex-col lg:flex-row justify-between flex-wrap hover:text-gray-100 transition duration-200 ease-in gap-4">
          <div className="flex flex-col gap-8">
            <div className="w-44 h-12 p-3 bg-white rounded-2xl">
              <img
                src={webLogo}
                className="w-full h-full object-contain"
                alt="FOOTER_LOGO"
              />
            </div>
            <ul className="leading-loose">
              <Link to={`mailto: support@dentalstall.com`}>
                <li className="flex items-center text-gray-100">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  support@dentalstall.com
                </li>
              </Link>
              <Link to={`tel: +91-74281-84111`}>
                <li className="flex items-center text-gray-100">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  +91-74281-84111
                </li>
              </Link>
              <Link to={"/"}>
                <li className="flex items-center text-gray-100">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="10" r="3" />
                      <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </svg>
                  </span>
                  11, Rama Park, Kishan Ganj, Old Rohtak Road, Delhi, India
                </li>
              </Link>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-gray-100 capitalize font-semibold">
                get to know us
              </h3>
              <ul className="leading-loose text-gray-300">
                <Link to={"/about"}>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    about us
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    frequently asked questions
                  </li>
                </Link>
                <Link to={"/contact-us"}>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    contact us
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    blogs
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-100 capitalize font-semibold">policy</h3>
              <ul className="leading-loose text-gray-300">
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    terms & conditions
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    privacy policy
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    customer service policy
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    shipping and delivery policy
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    return and refund policy
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-100 capitalize font-semibold">
                customer care
              </h3>
              <ul className="leading-loose text-gray-300">
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    my account
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    track your order
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    product support
                  </li>
                </Link>
                <Link>
                  <li className="capitalize hover:text-gray-100 transition duration-200 ease-in">
                    return/exchange
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-end lg:justify-end gap-2">
          <div className="w-28">
            <img src={playStore} className="w-full object-contain" alt="" />
          </div>
          <div className="w-28">
            <img src={appStore} className="w-full object-contain" alt="" />
          </div>
        </div>
        <div className="border-t border-gray-300 items-center flex justify-between flex-wrap gap-4 mt-7 pt-6">
          <p className="capitalize text-gray-300">
            &copy; {new Date().getFullYear()} dentalstall. All right reserved
          </p>
          <ul className="flex items-center gap-4">
            <Link>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-gray-300 hover:fill-white transition duration-200 ease-in-out"
                >
                  <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z" />
                </svg>
              </li>
            </Link>
            <Link>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-gray-300 hover:fill-white transition duration-200 ease-in-out"
                >
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm3.193 7c-1.586 0-2.872 1.243-2.872 2.777 0 .217.025.43.074.633a8.251 8.251 0 0 1-5.92-2.902c-.247.41-.389.887-.389 1.397 0 .963.507 1.813 1.278 2.311a2.94 2.94 0 0 1-1.301-.348v.036c0 1.345.99 2.467 2.304 2.723a2.98 2.98 0 0 1-1.298.047c.366 1.103 1.427 1.906 2.683 1.928a5.889 5.889 0 0 1-3.567 1.19c-.231 0-.46-.014-.685-.04A8.332 8.332 0 0 0 9.903 18c5.283 0 8.172-4.231 8.172-7.901 0-.12-.002-.24-.008-.36A5.714 5.714 0 0 0 19.5 8.302a5.869 5.869 0 0 1-1.65.437 2.8 2.8 0 0 0 1.263-1.536 5.87 5.87 0 0 1-1.824.674A2.915 2.915 0 0 0 15.193 7z" />
                </svg>
              </li>
            </Link>
            <Link>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-gray-300 hover:fill-white transition duration-200 ease-in-out"
                >
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4 7.278V4.5h-2.286c-2.1 0-3.428 1.6-3.428 3.889v1.667H8v2.777h2.286V19.5h2.857v-6.667h2.286L16 10.056h-2.857V8.944c0-1.11.572-1.666 1.714-1.666H16z" />
                </svg>
              </li>
            </Link>
            <Link>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-gray-300 hover:fill-white transition duration-200 ease-in-out"
                >
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z" />
                </svg>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
