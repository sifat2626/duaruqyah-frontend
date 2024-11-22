import { IoMenu } from "react-icons/io5"
import CategoriesList from "../CategoryList"

function Drawer({ categories, handleSearch }) {
  return (
    <div className="drawer bg-white my-4 px-6 py-4 rounded-lg z-8">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <IoMenu />
            <p className="text-[#1FA45B]">Categories</p>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="">
          <CategoriesList categories={categories} handleSearch={handleSearch} />
        </div>
      </div>
    </div>
  )
}

export default Drawer
