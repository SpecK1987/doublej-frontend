import { Helmet } from "react-helmet-async";

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ | Double J Gulf Services</title>
        <meta
          name="description"
          content="Frequently asked questions about Gulf supply and delivery services for boats, platforms, and local businesses."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-navy mb-4">
          Frequently Asked Questions
        </h1>

        <div className="space-y-3">
          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-semibold text-navy text-sm">
              Do you deliver offshore to platforms and rigs?
            </summary>
            <p className="text-sm text-gray-700 mt-2">
              Yes. We support deliveries to offshore platforms and rigs,
              coordinated around your vessel schedules and weather windows.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-semibold text-navy text-sm">
              What areas do you serve in the Gulf?
            </summary>
            <p className="text-sm text-gray-700 mt-2">
              We focus on Gulf of Mexico operations, including boats, platforms,
              and local businesses along the coast.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-semibold text-navy text-sm">
              Can you handle refrigerated or frozen goods?
            </summary>
            <p className="text-sm text-gray-700 mt-2">
              Yes. We can work with refrigerated and frozen items with proper
              handling and timing.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-semibold text-navy text-sm">
              How far in advance should I place an order?
            </summary>
            <p className="text-sm text-gray-700 mt-2">
              As early as possible is best, but we understand last-minute
              realities. Use the portal to submit orders as soon as you know
              your needs.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow p-4">
            <summary className="font-semibold text-navy text-sm">
              Do you support recurring deliveries?
            </summary>
            <p className="text-sm text-gray-700 mt-2">
              Yes. We can support recurring deliveries for boats, platforms, and
              local businesses. Contact us to discuss a schedule.
            </p>
          </details>
        </div>
      </div>
    </>
  );
}
