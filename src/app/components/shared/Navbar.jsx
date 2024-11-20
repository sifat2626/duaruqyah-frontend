import Image from "next/image"
import person from "@/assets/images/navbar/person.svg"
import search from "@/assets/images/navbar/search.svg"
import dua from "@/assets/images/sidebar/dua.png"
import dropdown from "@/assets/images/navbar/dropdown.svg"

function Navbar() {
  return (
    <div className=" w-full py-6 px-6 bg-white xl:bg-transparent">
      <div className="flex justify-between">
        <div className="">
          <h3 className="font-poppins text-2xl font-semibold text-[#393939] hidden xl:block">
            Duas Page
          </h3>
          <div className="xl:hidden flex items-center gap-2">
            <Image src={dua} className="size-12" />
            <h3 className="font-poppins text-xl xl:text-2xl xl:font-semibold font-medium text-[#393939] ">
              Dua & Ruqyah
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className=" items-center hidden md:flex">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="placeholder:text-[#868686] px-4 py-4 w-96 rounded-xl bg-[#F3F4F6] xl:bg-white"
            />
            <div className="-ml-16  px-4 py-3 rounded-xl xl:bg-[#F3F4F6] bg-white">
              <Image src={search} />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Image src={person} className="size-12" />
            <Image src={dropdown} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
