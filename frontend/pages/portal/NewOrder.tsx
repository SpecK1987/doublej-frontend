import { useState } from "react";

export default function NewOrder() {
  const [pickupLocation, setPickup] = useState("");
  const [deliveryLocation, setDelivery] = useState("");
  const [goodsType, setGoodsType] = useState("");
  const [specialNotes, setNotes] = useState("");

  const submitOrder = async () => {
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

    window.location.href = "/portal/orders";
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-navy mb-4">Create New Order</h1>

      <input
        className="w-full p-2 border mb-3"
        placeholder="Pickup Location"
        onChange={(e) => setPickup(e.target.value)}
      />

      <input
        className="w-full p-2 border mb-3"
        placeholder="Delivery Location"
        onChange={(e) => setDelivery(e.target.value)}
      />

      <select
        className="w-full p-2 border mb-3"
        onChange={(e) => setGoodsType(e.target.value)}
      >
        <option>Select Goods Type</option>
        <option>Groceries</option>
        <option>Household</option>
        <option>Specialty</option>
      </select>

      <textarea
        className="w-full p-2 border mb-3"
        placeholder="Special Notes"
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        onClick={submitOrder}
        className="w-full bg-primary text-navy py-2 rounded font-bold"
      >
        Submit Order
      </button>
    </div>
  );
}
