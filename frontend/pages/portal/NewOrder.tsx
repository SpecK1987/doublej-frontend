import { useState } from "react";

export default function NewOrder() {
  const [pickupLocation, setPickup] = useState("");
  const [deliveryLocation, setDelivery] = useState("");
  const [goodsType, setGoodsType] = useState("");
  const [specialNotes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const submitOrder = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
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
        <h1 className="text-3xl font-bold text-navy mb-6">
          Create a New Order
        </h1>

        {/* SECTION: Pickup & Delivery */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-navy mb-3">
            Pickup & Delivery Details
          </h2>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">
              Pickup Location
            </span>
            <input
              className="w-full p-3 border rounded mt-1 focus:ring-primary focus:border-primary"
              placeholder="Warehouse, dock, yard, etc."
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
              onChange={(e) => setDelivery(e.target.value)}
            />
          </label>
        </div>

        {/* SECTION: Goods Information */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-navy mb-3">
            Goods Information
          </h2>

          <label className="block mb-4">
            <span className="text-sm font-medium text-gray-700">
              Type of Goods
            </span>
            <select
              className="w-full p-3 border rounded mt-1 bg-white focus:ring-primary focus:border-primary"
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
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          onClick={submitOrder}
          disabled={loading}
          className={`w-full py-3 rounded font-bold text-navy bg-primary hover:bg-yellow-400 transition ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Submit Order"}
        </button>
      </div>
    </div>
  );
}
