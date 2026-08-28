import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import { TrailingCursor } from "../ui/TrailingCursor";



export const Mainlayout = () => {
  return (
    <div>
      <TrailingCursor />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
