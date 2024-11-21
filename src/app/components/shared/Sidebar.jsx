import dua from "@/assets/images/sidebar/dua.png"
import home from "@/assets/images/sidebar/home.svg"
import menu from "@/assets/images/sidebar/menu.svg"
import ruqyah from "@/assets/images/sidebar/ruqyah.svg"
import bookmark from "@/assets/images/sidebar/bookmark.svg"
import books from "@/assets/images/sidebar/books.svg"
import bulb from "@/assets/images/sidebar/bulb.svg"
import donateHeart from "@/assets/images/sidebar/donate-heart.svg"
import duaInfo from "@/assets/images/sidebar/dua-info.svg"
import Image from "next/image"
function Sidebar() {
  return (
    <div className="xl:h-[calc(100vh-48px)] xl:overflow-y-scroll sidebar-scrollbar xl:m-6 bg-white xl:py-8 xl:px-5 xl:rounded-3xl rounded-t-3xl z-2">
      <div className="flex xl:flex-col flex-row xl:gap-7 justify-between px-6 py-4 xl:px-0 xl:py-0">
        <div className="cursor-pointer xl:mb-12 xl:block hidden">
          <Image src={dua} alt="dua image" className="size-12" />
        </div>
        <div className="bg-[#E8F0F5] hover:scale-105 transition-all cursor-pointer rounded-full p-2  size-10 flex justify-center items-center">
          <Image alt="" src={home} className="" />
        </div>
        <div className="bg-[#E8F0F5] hover:scale-105 transition-all cursor-pointer rounded-full p-2  size-10 flex justify-center items-center">
          <Image alt="" src={menu} className="" />
        </div>
        <div className="bg-[#E8F0F5] hover:scale-105 transition-all cursor-pointer rounded-full p-2  size-10 flex justify-center items-center">
          <Image alt="" src={bulb} className="" />
        </div>
        <div className="bg-[#E8F0F5] hover:scale-105 transition-all cursor-pointer rounded-full p-2  size-10 flex justify-center items-center">
          <Image alt="" src={bookmark} className="" />
        </div>
        <div className="bg-[#E8F0F5] hover:scale-105 transition-all cursor-pointer rounded-full p-2  size-10 flex justify-center items-center">
          <Image alt="" src={ruqyah} className="" />
        </div>
        <div className="bg-[#E8F0F5] hover:scale-105 transition-all cursor-pointer rounded-full p-2  size-10  justify-center items-center hidden xl:flex">
          <Image alt="" src={duaInfo} className="" />
        </div>
        <div className="bg-[#E8F0F5] hover:scale-105 transition-all cursor-pointer rounded-full p-2  size-10  justify-center items-center hidden xl:flex">
          <Image alt="" src={books} className="" />
        </div>
        <div className="xl:my-12 hidden xl:block">
          <div className="bg-[#1FA45B] cursor-pointer rounded-lg p-2  size-12 flex justify-center items-center">
            <Image alt="" src={donateHeart} className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
