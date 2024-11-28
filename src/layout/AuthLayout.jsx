import Announcement from "@/shared/Announcement"
import Navbar from "@/shared/Navbar"
import { Outlet, ScrollRestoration } from "react-router-dom"


function AuthLayout() {
  return (
    <div>
    <ScrollRestoration></ScrollRestoration>
    <Announcement />
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
  )
}

export default AuthLayout