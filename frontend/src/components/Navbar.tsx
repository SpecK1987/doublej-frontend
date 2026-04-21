export default function Navbar() {
  return (
    <nav className="bg-navy text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Double J Gulf Services</h1>
      <div className="space-x-6">
        <a href="/" className="hover:text-primary">Home</a>
        <a href="/services" className="hover:text-primary">Services</a>
        <a href="/contact" className="hover:text-primary">Contact</a>
        <a href="/portal/login" className="bg-primary text-navy px-4 py-2 rounded">Portal</a>
      </div>
    </nav>
  );
}
