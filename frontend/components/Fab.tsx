import { useNavigate } from "react-router-dom";

const Fab = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/portal/orders/new")}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center text-2xl hover:bg-blue-700 transition-transform transform hover:scale-105"
      aria-label="New Order"
    >
      +
    </button>
  );
};

export default Fab;
