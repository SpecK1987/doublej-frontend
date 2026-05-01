import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="max-w-md text-center space-y-4">
          <div className="text-6xl">🚚</div>
          <h1 className="text-2xl font-bold">This route doesn’t exist.</h1>
          <p className="text-sm text-gray-600">
            Looks like you’ve taken a wrong turn. Let’s get you back on the right road.
          </p>
          <div className="flex justify-center gap-3 text-sm">
            <Link
              to="/"
              className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Back to Home
            </Link>
            <Link
              to="/portal"
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Go to Portal
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
