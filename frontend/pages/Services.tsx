import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="bg-lightgrey min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-navy mb-6">Our Services</h1>

        {[
          {
            title: "Storage",
            text1:
              "Secure, organized storage for groceries, household products, and specialty items.",
            text2:
              "We maintain clear labeling, rotation, and handling practices for operational readiness.",
          },
          {
            title: "Packaging",
            text1:
              "Marine- and oilfield-ready packaging to protect goods during transport.",
            text2:
              "From bulk provisions to specialty items, we prepare loads for efficient transfer.",
          },
          {
            title: "Delivery",
            text1:
              "Coordinated delivery to boats, platforms, and local businesses across the Gulf.",
            text2:
              "We align delivery windows with vessel movements and site access requirements.",
          },
        ].map((s) => (
          <section key={s.title} className="mb-8 bg-white p-6 rounded shadow-sm">
            <h2 className="text-xl font-semibold text-navy mb-2">{s.title}</h2>
            <p className="text-sm text-gray-800 mb-2">{s.text1}</p>
            <p className="text-sm text-gray-700">{s.text2}</p>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
