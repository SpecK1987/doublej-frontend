import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Gulf Supply & Delivery for Boats and Platforms | Double J Gulf
          Services
        </title>
        <meta
          name="description"
          content="Double J Gulf Services provides storage, packaging, and delivery of groceries, household products, and specialty items to boats, platforms, and local businesses across the Gulf."
        />
      </Helmet>

      <section className="bg-navy text-white py-16">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Reliable Gulf Supply & Delivery
            </h1>
            <p className="text-sm md:text-base mb-6 text-gray-200">
              Storage, packaging, and delivery of groceries, household products,
              and specialty items to boats, platforms, and local businesses
              across the Gulf.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services"
                className="bg-primary text-navy px-5 py-2 rounded font-semibold"
              >
                View Services
              </a>
              <a
                href="/portal/login"
                className="border border-primary text-primary px-5 py-2 rounded font-semibold"
              >
                Customer Portal
              </a>
            </div>
          </div>
          <div className="bg-lightgrey text-navy rounded-lg p-6 w-full md:w-1/2">
            <h2 className="font-semibold mb-2">Built for Gulf Operations</h2>
            <ul className="text-sm space-y-1">
              <li>• Boats, platforms, and local businesses</li>
              <li>• Time-sensitive delivery windows</li>
              <li>• Groceries, household, and specialty items</li>
              <li>• Clear communication and status visibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="font-semibold text-navy mb-2">Boats</h3>
            <p className="text-sm text-gray-700">
              Provisioning for crew boats, supply vessels, and workboats with
              tight turnaround times.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="font-semibold text-navy mb-2">Platforms</h3>
            <p className="text-sm text-gray-700">
              Coordinated deliveries to offshore platforms with clear timing and
              communication.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="font-semibold text-navy mb-2">Local Businesses</h3>
            <p className="text-sm text-gray-700">
              Storage and delivery support for local yards, docks, and
              businesses along the Gulf.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
