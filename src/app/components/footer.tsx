const Footer = () => {
  return (
    <div id="webcrumbs" className="w-full bg-neutral-800 text-white p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between mb-12 gap-8">
          {/* Company Info */}
          <div className="space-y-4 max-w-sm">
            <div>
              <h1 className="text-2xl font-bold">
                Tewaru<span className="text-white">Imports</span>
              </h1>
              <p className="text-sm text-gray-400">
                Your Gateway to Quality Imports
              </p>
            </div>
            <p className="text-sm text-gray-400">
              At Tewaru, we specialize in bringing the best and most reliable
              imports from around the world, ensuring quality and efficiency
              every step of the way.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity text-xl"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity text-xl"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity text-xl"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-2">
            <h2 className="font-semibold mb-4">About Us</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Expertise in global trade
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Reliable and timely deliveries
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Premium quality imports only
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Trusted by businesses worldwide
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Customized import solutions
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h2 className="font-semibold">ADDRESS</h2>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined">location_on</span>
                1234 Import Blvd, Global City, Country
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined">phone</span>
                +123 456 7890
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                sales@tewaruet.com
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 w-full md:w-auto">
            <h2 className="font-semibold">CONTACT US</h2>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-neutral-700 px-4 py-2 rounded-l outline-none w-full md:w-auto"
              />
              <button className="bg-blue-500 px-4 rounded-r hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Have questions? Feel free to reach out to us, and our team will be
              happy to assist you.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Tewaru Imports. All Rights
            Reserved. |{" "}
            <a href="mailto:support@tewaruet.com" className="hover:text-white">
              Support
            </a>{" "}
            |{" "}
            <a href="mailto:account@tewaruet.com" className="hover:text-white">
              Account
            </a>{" "}
            |{" "}
            <a
              href="mailto:technical@tewaruet.com"
              className="hover:text-white"
            >
              Technical
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
