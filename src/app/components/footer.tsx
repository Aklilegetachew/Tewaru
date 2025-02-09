const Footer = () => {
  return (
    <div id="webcrumbs" className="w-full bg-neutral-800 text-white p-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between mb-12 gap-8">
          {/* Company Info */}
          <div className="space-y-4 max-w-sm">
            <div>
              <h1 className="text-2xl font-bold">
                YOUR<span className="text-white">COMPANY</span>
              </h1>
              <p className="text-sm text-gray-400">Your Slogan Here</p>
            </div>
            <p className="text-sm text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque totam
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
              {[
                "Many",
                "Some Us",
                "Therefore",
                "Always Is",
                "Doloremque",
                "Minima Veniam, Quis Nostrum",
                "Interne",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h2 className="font-semibold">ADDRESS</h2>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined">location_on</span>
                Lorem ipsum
                <br />
                Lorem Ipsum Lorem 1234
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined">phone</span>
                Sed Do Eiusmod Tem?
                <br />
                123.456.7890
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                Nati Us
                <br />
                info@stewaruet.com
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 w-full md:w-auto">
            <h2 className="font-semibold">CONTACT US</h2>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="laboris nis *"
                className="bg-neutral-700 px-4 py-2 rounded-l outline-none w-full md:w-auto"
              />
              <button className="bg-blue-500 px-4 rounded-r hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur elit,
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
