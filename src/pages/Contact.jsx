import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-[95%] lg:w-[90%] mx-auto py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </div>
      <div className="flex flex-wrap p-8">
        <div className="flex-1 border rounded-2xl order-2 md:order-1 lg:order-1 rounded-t-none md:rounded-r-none p-4 lg:p-8">
          <form>
            <div className="flex gap-3 mb-5">
              <div className="w-full">
                <label className="text-gray-600 text-sm" htmlFor="firstName">
                  First Name
                </label>
                <div className="relative mt-2 text-gray-500">
                  <input
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-gray-600 text-sm" htmlFor="lastName">
                  Last Name
                </label>
                <div className="relative mt-2 text-gray-500">
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="text-gray-600 text-sm" htmlFor="email">
                Email
              </label>
              <div className="relative mt-2 text-gray-500">
                <input
                  type="email"
                  placeholder="you@company.com"
                  id="email"
                  className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div className="mb-5">
              <div>
                <label className="text-gray-600 text-sm" htmlFor="phoneNumber">
                  Phone number
                </label>
                <div className="relative mt-2 text-gray-500">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm outline-none rounded-lg h-full">
                      <option>US</option>
                      <option>RS</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+1 (555) 000-000"
                    id="phoneNumber"
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mb-1">
              <label className="text-gray-600 text-sm" htmlFor="message">
                Message
              </label>
              <div className="relative mt-2 text-gray-500">
                <textarea
                  id="message"
                  className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg resize-none"
                ></textarea>
              </div>
            </div>
            <div className="mb-5">
              <input type="checkbox" className="mr-1 outline-none border" />
              <span className="text-gray-600">
                You agree to our friendly{" "}
                <Link className="text-theme" to={"/"}>
                  privacy policy
                </Link>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-theme rounded-xl p-2 text-gray-100"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 order-1 md:order-2 lg:order-2">
          <div className="bg-gradient-to-b from-secondary-theme to-theme h-full p-4 lg:p-8 rounded-2xl rounded-b-none md:rounded-l-none lg:rounded-l-none">
            <div className="message mb-3">
              <h2 className="mb-2 font-semibold text-white">
                Leave us a Message
              </h2>
              <p className="text-text-color">
                Leave us a Message If you want to contact us for any reason or
                any query then you can leave a message or a comment in the box
                provided below. Our team will definitely get back to you with
                whatever best they can do for you. You just have to fill a few
                contact details:
              </p>
            </div>
            <ul className="leading-10 mb-3">
              <Link to={`tel: +91-74281-84111`}>
                <li className="flex items-center text-text-color">
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
              <Link to={`mailto: support@dentalstall.com`}>
                <li className="flex items-center text-text-color">
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
              <Link to={"/"}>
                <li className="flex items-center text-text-color">
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
            <div className="mb-3">
              <h2 className="mb-2 font-semibold text-white">Opening Hours</h2>
              <p className="text-text-color">Monday to Saturday: 10am-7pm</p>
              <p className="text-text-color">Sunday: Holiday</p>
            </div>
            <div className="mb-3">
              <h2 className="mb-2 font-semibold text-white">Careers</h2>
              <p className="text-text-color">
                If you’re interested in employment opportunities at
                Dentalstall.com, please email us:{" "}
                <Link
                  to={"mailto: careers@dentalstall.com"}
                  className="hover:text-white transition duration-200 ease-in"
                >
                  careers@dentalstall.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
