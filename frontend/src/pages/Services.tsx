import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const services = [
  {
    title: "Hotshot Deliveries",
    desc: "Time‑critical loads moved fast with dedicated equipment and experienced operators.",
  },
  {
    title: "Dedicated Routes",
    desc: "Recurring lanes and scheduled runs to keep your operation predictable.",
  },
  {
    title: "Oilfield & Industrial",
    desc: "Specialized runs for oilfield, industrial, and construction support.",
  },
];

const testimonials = [
  {
    name: "Operations Manager, Fabrication Shop",
    quote:
      "Double J keeps our rush jobs moving. Communication is clear and they treat every load like it matters.",
  },
  {
    name: "Logistics Coordinator, Supply Company",
    quote:
      "Reliable, responsive, and easy to work with. The portal makes it simple to keep track of everything.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-24">
        <PageTransition>
          <section className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2">Services</h1>
            <p className="text-sm text-gray-600 mb-6">
              Built for operators who need reliability, communication, and speed across the Gulf
              region.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="p-4 rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition transform"
                >
                  <h2 className="font-semibold mb-1">{s.title}</h2>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-4">What our partners say</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-blue-200 transition"
                >
                  <p className="text-sm text-gray-700 mb-2">“{t.quote}”</p>
                  <div className="text-xs text-gray-500 font-semibold">{t.name}</div>
                </div>
              ))}
            </div>
          </section>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
