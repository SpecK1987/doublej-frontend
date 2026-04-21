export default function Footer() {
  return (
    <footer className="bg-navy text-white text-sm py-4 mt-12">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <p>© {new Date().getFullYear()} Double J Gulf Services</p>
        <p>Gulf logistics • Boats • Platforms • Local businesses</p>
      </div>
    </footer>
  );
}
