const Footer = () => {
  return (
    <footer className="mt-12 border-t bg-gray-100">
      <div className="mx-auto max-w-7xl px-5 py-8">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <h2 className="text-xl font-bold text-red-600">Bangla News 24</h2>

          {/* Links */}
          <div className="flex gap-5 text-sm text-gray-600">
            <a href="#" className="hover:text-red-600">
              Home
            </a>

            <a href="#" className="hover:text-red-600">
              About
            </a>

            <a href="#" className="hover:text-red-600">
              Contact
            </a>

            <a href="#" className="hover:text-red-600">
              Privacy
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 border-t pt-5 text-center text-sm text-gray-500">
          © 2026 Bangla News 24. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
