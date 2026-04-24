import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Double J Gulf Services</title>
        <meta
          name="description"
          content="Storage, packaging, and delivery services for boats, platforms, and local businesses across the Gulf."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-navy mb-4">Our Services</h1>
        <p className="text-sm text-gray-700 mb-8">
          Double J Gulf Services is focused on the realities of Gulf logistics:
          tight windows, changing conditions, and crews that can’t afford
          delays. We provide storage, packaging, and delivery of groceries,
          household products, and specialty items to boats, platforms, and local
          businesses.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="font-semibold text-navy mb-2">
              Storage & Packaging
            </h2>
            <p className="text-sm text-gray-700">
              Secure storage and organized packaging to keep orders accurate and
              ready for fast dispatch.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="font-semibold text-navy mb-2">
              Boat & Platform Delivery
            </h2>
            <p className="text-sm text-gray-700">
              Coordinated deliveries to crew boats, supply vessels, and
              platforms with clear timing and communication.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="font-semibold text-navy mb-2">
              Local Business Support
            </h2>
            <p className="text-sm text-gray-700">
              Delivery support for local yards, docks, and businesses that need
              reliable, repeat service.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="font-semibold text-navy mb-2">
              Specialty & Bulk Items
            </h2>
            <p className="text-sm text-gray-700">
              Handling of specialty items and bulk orders with attention to
              safety and handling requirements.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            className="bg-primary text-navy px-5 py-2 rounded font-semibold"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </>
  );
}
