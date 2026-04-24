interface Props {
  status: "pending" | "scheduled" | "in_transit" | "delivered";
}

const steps = [
  { key: "pending", label: "Order Received" },
  { key: "scheduled", label: "Scheduled" },
  { key: "in_transit", label: "In Transit" },
  { key: "delivered", label: "Delivered" }
] as const;

export default function StatusTimeline({ status }: Props) {
  const currentIndex = steps.findIndex((s) => s.key === status);

  return (
    <div className="flex items-center space-x-4">
      {steps.map((step, idx) => {
        const active = idx <= currentIndex;
        return (
          <div key={step.key} className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full ${
                active ? "bg-primary" : "bg-gray-300"
              }`}
            />
            <span
              className={`ml-2 text-xs ${
                active ? "text-navy font-semibold" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
            {idx < steps.length - 1 && (
              <div className="w-8 h-px bg-gray-300 mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
}
