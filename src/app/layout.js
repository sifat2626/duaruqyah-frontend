import Navbar from "./components/shared/Navbar"
import Sidebar from "./components/shared/Sidebar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-inter">
        {/* Outer container limited to screen height */}
        <div className="flex h-screen bg-[#EBEEF2] overflow-hidden">
          {/* Sidebar fixed to screen height */}
          <div className=" h-full">
            <Sidebar />
          </div>

          {/* Main content container */}
          <div className="flex flex-1 flex-col h-full">
            {/* Navbar with fixed height */}
            <div className="">
              <Navbar />
            </div>

            {/* Scrollable main content below Navbar */}
            <div className="overflow-hidden">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
