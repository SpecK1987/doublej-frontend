export default function Navbar() {
  return (
    <nav className="bg-navy text-white px-8 py-4 flex justify-between items-center">
      <a href="/" className="text-xl font-bold tracking-wide">
        Double J Gulf Services
      </a>
      <div className="space-x-6 text-sm font-medium">
        <a href="/services" className="hover:text-primary">Services</a>
        <a href="/about" className="hover:text-primary">About</a>
        <a href="/contact" className="hover:text-primary">Contact</a>
        <a
          href="/portal/login"
          className="bg-primary text-navy px-4 py-2 rounded shadow-sm"
        >
          Customer Portal
        </a>
      </div>
    </nav>
  );
}
