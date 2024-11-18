import Navbar from "../shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../shared/Footer";
import Announcement from "../shared/Announcement";

function Layout() {
  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <Announcement />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
