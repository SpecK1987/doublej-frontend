import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Double J Gulf Services</title>
        <meta
          name="description"
          content="Learn about Double J Gulf Services, a Gulf-focused logistics partner for boats, platforms, and local businesses."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-navy mb-4">About Us</h1>
        <p className="text-sm text-gray-700 mb-4">
          Double J Gulf Services was built around the realities of Gulf
          logistics—tight windows, changing conditions, and crews that can’t
          afford delays. We focus on storage, packaging, and delivery of
          groceries, household products, and specialty items to boats,
          platforms, and local businesses.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Our goal is simple: keep your operations supplied, on time, and
          informed. That means clear communication, reliable scheduling, and a
          system that lets you see the status of your orders at a glance.
        </p>

        <h2 className="text-xl font-semibold text-navy mt-6 mb-3">
          What We Stand For
        </h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Reliability in changing Gulf conditions</li>
          <li>Clear communication with crews and coordinators</li>
          <li>Respect for tight operational windows</li>
          <li>Safe handling of food and specialty items</li>
        </ul>

        <div className="mt-8">
          <a
            href="/services"
            className="bg-primary text-navy px-5 py-2 rounded font-semibold"
          >
            View Our Services
          </a>
        </div>
      </div>
    </>
  );
}
