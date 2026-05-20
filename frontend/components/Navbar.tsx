import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("siteTheme") || "light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("siteTheme", theme);
  }, [theme]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${scrolled ? "backdrop-blur bg-white/80 shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            DJ
          </div>
          <span className="font-semibold tracking-wide">Double J Gulf Services</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  relative pb-1 transition-colors
                  ${active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}
                `}
              >
                {item.label}
                <span
                  className={`
                    absolute left-0 -bottom-0.5 h-0.5 w-full rounded-full bg-blue-600
                    transition-transform duration-300 origin-left
                    ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : prev === "dark" ? "glass" : "light"))
            }
            className="px-3 py-1 text-xs rounded-full border border-gray-300 bg-white/70 hover:bg-white shadow-sm"
          >
            {theme === "light" && "Light"}
            {theme === "dark" && "Dark"}
            {theme === "glass" && "Glass"}
          </button>

          <Link
            to="/portal"
            className="hidden md:inline-flex px-4 py-1.5 text-xs font-semibold rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
          >
            Customer Portal
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
