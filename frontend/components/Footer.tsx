const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold mb-2">Double J Gulf Services</h3>
          <p className="text-gray-500">
            Reliable logistics and hotshot services across the Gulf region with a focus on safety,
            speed, and communication.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Home</li>
            <li>Services</li>
            <li>Customer Portal</li>
            <li>Admin Login</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-600">Kaplan, Louisiana</p>
          <p className="text-gray-600">Phone: (555) 123‑4567</p>
          <p className="text-gray-600">Email: dispatch@example.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Service Area</h4>
          <p className="text-gray-600">
            Serving the Gulf Coast region with rapid response hotshot deliveries and dedicated
            routes.
          </p>
        </div>
      </div>

      <div className="border-t text-center text-xs text-gray-500 py-3">
        © {new Date().getFullYear()} Double J Gulf Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
