import Image from "next/image"
import person from "@/assets/images/navbar/person.svg"
import search from "@/assets/images/navbar/search.svg"
import dua from "@/assets/images/sidebar/dua.png"
import dropdown from "@/assets/images/navbar/dropdown.svg"
import { FaGear } from "react-icons/fa6"

function Navbar() {
  return (
    <div className=" w-full py-6 px-6 bg-white xl:bg-transparent">
      <div className="flex justify-between">
        <div className="">
          <h3 className="font-poppins text-2xl font-semibold text-[#393939] hidden xl:block">
            Duas Page
          </h3>
          <div className="xl:hidden flex items-center gap-2">
            <Image alt="" src={dua} className="size-12" />
            <h3 className="font-poppins text-xl xl:text-2xl xl:font-semibold font-medium text-[#393939] ">
              Dua & Ruqyah
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-12 ml-auto">
          <div className=" items-center hidden md:flex">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="placeholder:text-[#868686] px-4 py-4 w-96 rounded-xl bg-[#F3F4F6] xl:bg-white"
            />
            <div className="-ml-16  px-4 py-3 rounded-xl xl:bg-[#F3F4F6] bg-white">
              <Image alt="" src={search} />
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-1 cursor-pointer -mr-16">
              <Image alt="" src={person} height={96} />
              <Image alt="" src={dropdown} />
            </div>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content  flex justify-end">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="bg-transparent">
                  <div className="">
                    <FaGear className="text-[#1fa45b] text-xl cursor-pointer" />
                  </div>
                </label>
              </div>
              <div className="drawer-side z-10">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
