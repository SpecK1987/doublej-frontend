import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Contact form submitted (wire backend email later).");
  };

  return (
    <>
      <Helmet>
        <title>Contact | Double J Gulf Services</title>
        <meta
          name="description"
          content="Contact Double J Gulf Services to request a quote or ask about Gulf supply and delivery services."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-navy mb-4">Contact Us</h1>
        <p className="text-sm text-gray-700 mb-6">
          Tell us what you need delivered, where it’s going, and when. We’ll
          respond with options and timing.
        </p>

        <form
          onSubmit={submit}
          className="bg-white rounded-lg shadow p-6 grid md:grid-cols-2 gap-4"
        >
          <input
            className="p-3 border rounded"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="p-3 border rounded"
            placeholder="Company"
            value={form.company}
            onChange={(e) =>
              setForm((f) => ({ ...f, company: e.target.value }))
            }
          />
          <input
            className="p-3 border rounded"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm((f) => ({ ...f, email: e.target.value }))
            }
          />
          <input
            className="p-3 border rounded"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm((f) => ({ ...f, phone: e.target.value }))
            }
          />
          <textarea
            className="p-3 border rounded md:col-span-2 h-28"
            placeholder="What do you need delivered? Where is it going? When?"
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
          />
          <button
            type="submit"
            className="bg-primary text-navy px-5 py-2 rounded font-semibold md:col-span-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
