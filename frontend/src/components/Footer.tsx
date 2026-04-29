const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Double J Gulf Services</h3>
          <p>Reliable mobile services across the Gulf region.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-white">What We Do</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/portal/login" className="hover:text-white">Customer Portal</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p>Kaplan, Louisiana</p>
          <p>Email: support@doublejgulf.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} Double J Gulf Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
