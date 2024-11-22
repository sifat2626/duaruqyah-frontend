import Navbar from "./components/shared/Navbar"
import Sidebar from "./components/shared/Sidebar"
import "./globals.css"
import { NuqsAdapter } from "nuqs/adapters/next/app"

export const metadata = {
  title: "Dua & Ruqyah || All Dua's",
  description: "Explore a collection of Duas and Ruqyah for every occasion.",
  icons: {
    icon: "/dua.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter">
        {/* Outer container limited to screen height */}
        <div className="flex xl:flex-row flex-col-reverse h-screen bg-[#EBEEF2] overflow-y-auto">
          {/* Sidebar fixed to screen height */}
          <div className="h-full">
            <Sidebar />
          </div>

          {/* Main content container */}
          <div className="flex flex-1 flex-col h-full">
            {/* Navbar with fixed height */}
            <div className="">
              <Navbar />
            </div>

            {/* Scrollable main content below Navbar */}
            <div className="overflow-hidden">
              <NuqsAdapter>{children}</NuqsAdapter>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
