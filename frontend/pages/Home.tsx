import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SupportWidget from "../components/SupportWidget";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Gulf Coast Hotshot & Logistics,
              <span className="text-blue-600"> Done Right.</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Time‑critical loads, dedicated routes, and transparent communication from pickup to
              dropoff. Built for operators who can’t afford downtime.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/portal"
                className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition"
              >
                Enter Customer Portal
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                Talk to Dispatch
              </Link>
            </div>

            <div className="flex gap-6 text-xs text-gray-500">
              <div>
                <div className="font-semibold text-gray-700">24/7 Availability</div>
                <div>Emergency and scheduled runs</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700">Gulf Region</div>
                <div>Louisiana and surrounding states</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="relative bg-white/80 backdrop-blur rounded-2xl shadow-xl p-5 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500">Live Load</div>
                  <div className="font-semibold text-gray-800">Kaplan → Houston</div>
                </div>
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
                  In Transit
                </span>
              </div>

              <div className="h-1 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full w-2/3 bg-blue-600 transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="text-gray-500">Pickup</div>
                  <div className="font-semibold text-gray-800">Kaplan, LA</div>
                </div>
                <div className="p-3 rounded-lg bg-gray-50">
                  <div className="text-gray-500">Dropoff</div>
                  <div className="font-semibold text-gray-800">Houston, TX</div>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                Real‑time status and updates available inside the customer portal.
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-4">Why choose Double J Gulf Services?</h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="font-semibold mb-1">⚡ Speed & Reliability</div>
              <p className="text-gray-600">
                Time‑critical loads handled by experienced operators who understand urgency and
                safety.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="font-semibold mb-1">📍 Transparent Tracking</div>
              <p className="text-gray-600">
                Clear status updates from dispatch to delivery, with a portal built for visibility.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="font-semibold mb-1">🤝 Long‑Term Partners</div>
              <p className="text-gray-600">
                We’re not just a truck—we’re a logistics partner focused on keeping your operation
                moving.
              </p>
            </div>
          </div>
        </section>

        {/* Driver app preview */}
        <section className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">Driver‑first tools, coming online.</h2>
            <p className="text-sm text-gray-600 mb-4">
              A dedicated driver experience with clear loads, routes, and communication—designed to
              keep everyone on the same page.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Simple load list and status updates</li>
              <li>• Clear pickup and dropoff details</li>
              <li>• Communication channel with dispatch</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="relative bg-white rounded-2xl shadow-xl p-4 grid gap-3 text-xs">
              <div className="font-semibold text-gray-800">Driver App Preview</div>
              <div className="border rounded-lg p-3 space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Today’s Loads</span>
                  <span className="text-gray-500">3 active</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2 rounded bg-gray-50 flex justify-between">
                    <span>Kaplan → Houston</span>
                    <span className="text-green-600 font-semibold">In Transit</span>
                  </div>
                  <div className="p-2 rounded bg-gray-50 flex justify-between">
                    <span>Lafayette → Lake Charles</span>
                    <span className="text-yellow-600 font-semibold">Assigned</span>
                  </div>
                  <div className="p-2 rounded bg-gray-50 flex justify-between">
                    <span>New Iberia → Baton Rouge</span>
                    <span className="text-gray-500 font-semibold">Queued</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-500">
                This is a preview of where the platform is headed—built for both shippers and
                drivers.
              </div>
            </div>
          </div>
        </section>
      </main>

      <SupportWidget />
      <Footer />
    </div>
  );
};

export default Home;
