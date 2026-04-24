import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-lightgrey">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
