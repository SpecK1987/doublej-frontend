import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-lightgrey min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="bg-navy text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reliable Gulf Supply for Boats, Platforms, and Local Businesses
            </h1>
            <p className="text-lg text-lightgrey mb-8">
              Storing, packaging, and delivering quality goods across the Gulf of America.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="bg-primary text-navy px-6 py-3 rounded font-semibold"
              >
                Request a Quote
              </a>
              <a
                href="/services"
                className="border border-primary text-primary px-6 py-3 rounded font-semibold"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Offshore Vessels & Boats",
                text: "Provisioning and resupply for crew boats and support vessels.",
              },
              {
                title: "Platforms & Oilfield Sites",
                text: "Coordinated deliveries to platforms and oilfield locations.",
              },
              {
                title: "Local Businesses",
                text: "Reliable storage and delivery for local operations.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
