import Navbar from "./components/shared/Navbar"
import Sidebar from "./components/shared/Sidebar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-inter`}>
        <div className="flex gap-2 xl:flex-row flex-col-reverse justify-between min-h-screen bg-[#EBEEF2]">
          <Sidebar />
          <div className="">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
