import { useEffect, useState } from "react";
import { API, authHeader } from "../../utils/api";

export default function NewOrder() {
  const [step, setStep] = useState(1);

  const [pickupLocation, setPickup] = useState("");
  const [deliveryLocation, setDelivery] = useState("");
  const [goodsType, setGoodsType] = useState("");
  const [specialNotes, setNotes] = useState("");

  const [savedLocations, setSavedLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${API}/api/locations`, {
        headers: authHeader()
      });
      setSavedLocations(await res.json());
    })();
  }, []);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const submitOrder = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    await fetch(`${API}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        pickupLocation,
        deliveryLocation,
        goodsType,
        specialNotes
      })
    });

    setLoading(false);
    window.location.href = "/portal/orders";
  };

  return (
    <div className="min-h-screen bg-lightgrey py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`flex-1 h-2 mx-1 rounded ${
                step >= n ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <h1 className="text-3xl font-bold text-navy mb-6">
          Create a New Order
        </h1>

        {step === 1 && (
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Step 1: Pickup & Delivery
            </h2>

            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-700">
                Use Saved Location
              </span>
              <select
                className="w-full p-3 border rounded mt-1 bg-white"
                onChange={(e) => {
                  const idx = Number(e.target.value);
                  if (!Number.isNaN(idx)) {
                    const loc = savedLocations[idx];
                    setDelivery(`${loc.label} - ${loc.location}`);
                  }
                }}
              >
                <option value="">Select saved location</option>
                {savedLocations.map((loc, i) => (
                  <option key={i} value={i}>
                    {loc.type}: {loc.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-700">
                Pickup Location
              </span>
              <input
                className="w-full p-3 border rounded mt-1 focus:ring-primary focus:border-primary"
                placeholder="Warehouse, dock, yard, etc."
                value={pickupLocation}
                onChange={(e) => setPickup(e.target.value)}
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-700">
                Delivery Location
              </span>
              <input
                className="w-full p-3 border rounded mt-1 focus:ring-primary focus:border-primary"
                placeholder="Boat name, platform, or business"
                value={deliveryLocation}
                onChange={(e) => setDelivery(e.target.value)}
              />
            </label>

            <div className="flex justify-end mt-6">
              <button
                onClick={next}
                disabled={!pickupLocation || !deliveryLocation}
                className="bg-primary text-navy px-6 py-2 rounded font-bold disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Step 2: Goods Information
            </h2>

            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-700">
                Type of Goods
              </span>
              <select
                className="w-full p-3 border rounded mt-1 bg-white focus:ring-primary focus:border-primary"
                value={goodsType}
                onChange={(e) => setGoodsType(e.target.value)}
              >
                <option value="">Select goods type</option>
                <option value="Groceries">Groceries</option>
                <option value="Household">Household Products</option>
                <option value="Specialty">Specialty Items</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Special Notes (Optional)
              </span>
              <textarea
                className="w-full p-3 border rounded mt-1 h-28 resize-none focus:ring-primary focus:border-primary"
                placeholder="Fragile items, temperature requirements, timing notes, etc."
                value={specialNotes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>

            <div className="flex justify-between mt-6">
              <button
                onClick={back}
                className="bg-gray-300 text-navy px-6 py-2 rounded font-bold"
              >
                Back
              </button>

              <button
                onClick={next}
                disabled={!goodsType}
                className="bg-primary text-navy px-6 py-2 rounded font-bold disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-lg font-semibold text-navy mb-3">
              Step 3: Review & Confirm
            </h2>

            <div className="bg-lightgrey p-4 rounded mb-6">
              <h3 className="font-semibold text-navy mb-2">Pickup & Delivery</h3>
              <p>
                <strong>Pickup:</strong> {pickupLocation}
              </p>
              <p>
                <strong>Delivery:</strong> {deliveryLocation}
              </p>

              <h3 className="font-semibold text-navy mt-4 mb-2">Goods</h3>
              <p>
                <strong>Type:</strong> {goodsType}
              </p>
              <p>
                <strong>Notes:</strong> {specialNotes || "None"}
              </p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={back}
                className="bg-gray-300 text-navy px-6 py-2 rounded font-bold"
              >
                Back
              </button>

              <button
                onClick={submitOrder}
                disabled={loading}
                className={`bg-primary text-navy px-6 py-2 rounded font-bold ${
                  loading ? "opacity-50" : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit Order"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
