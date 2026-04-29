import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const HomePublic = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mobile Services You Can Count On
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Fast, reliable, and professional service across the Gulf region.
        </p>

        <Link
          to="/portal/login"
          className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Access Customer Portal
        </Link>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-3">Mobile Repairs</h3>
              <p>On-site service for a wide range of repair needs.</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-3">Emergency Support</h3>
              <p>Fast response when you need help the most.</p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-3">Scheduled Services</h3>
              <p>Book ahead for routine maintenance and inspections.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="text-blue-600 font-semibold hover:underline"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-gray-700 mb-6">
            We're here to help. Reach out anytime.
          </p>

          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePublic;
