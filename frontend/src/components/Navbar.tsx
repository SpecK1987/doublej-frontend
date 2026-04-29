import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "What We Do", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Double J Gulf Services
        </Link>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/portal/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Customer Portal
          </Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/portal/login"
            className="block bg-blue-600 text-white px-4 py-2 rounded text-center"
            onClick={() => setOpen(false)}
          >
            Customer Portal
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
