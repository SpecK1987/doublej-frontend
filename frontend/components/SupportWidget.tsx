import { useState } from "react";

const SupportWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {open && (
        <div className="mb-3 w-72 rounded-xl shadow-xl bg-white border border-gray-200 overflow-hidden">
          <div className="px-3 py-2 bg-blue-600 text-white text-sm font-semibold">
            Need help?
          </div>
          <div className="p-3 text-sm text-gray-700 space-y-2">
            <p>Hi! How can we help you today?</p>
            <button className="w-full px-3 py-1.5 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left">
              Track my order
            </button>
            <button className="w-full px-3 py-1.5 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left">
              Contact dispatch
            </button>
            <button className="w-full px-3 py-1.5 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left">
              Report an issue
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((s) => !s)}
        className="w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50"
      >
        {open ? "×" : "?"}
      </button>
    </div>
  );
};

export default SupportWidget;
