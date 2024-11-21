import duaIcon from "@/assets/images/dua/duaIcon.svg"
import copy from "@/assets/images/dua/copy.svg"
import report from "@/assets/images/dua/report.svg"
import share from "@/assets/images/dua/share.svg"
import bookmark from "@/assets/images/sidebar/bookmark.svg"
import bulb from "@/assets/images/sidebar/bulb.svg"
import Image from "next/image"

const icons = [
  { src: copy, title: "Copy" },
  { src: bookmark, title: "Bookmark" },
  { src: bulb, title: "Memorize" },
  { src: share, title: "Share" },
  { src: report, title: "Report" },
]

function DuaCard({ dua }) {
  const {
    dua_name_en,
    top_en,
    refference_en,
    dua_arabic,
    transliteration_en,
    translation_en,
  } = dua
  return (
    <div className="px-8 py-4 mb-4 bg-white rounded-lg">
      <div className="flex flex-col gap-7">
        <div className="flex gap-2.5 items-center ">
          <Image src={duaIcon} alt="dua icon" />
          <h3 className="text-[#1FA45B] font-semibold">{dua_name_en}</h3>
        </div>
        <div className="">
          <p className="text-[#393939]">{top_en}</p>
        </div>
        <div className="">
          <h3 className="font-semibold text-[#1FA45B]">Reference:</h3>
          <p className="text-[#393939] font-medium">{refference_en}</p>
        </div>
        {dua_arabic && (
          <div className="text-right">
            <h3 className="text-[#2e2e2e] font-meQuran text-3xl font-extrabold leading-[56px] tracking-wider">
              {dua_arabic}
            </h3>
          </div>
        )}
        {transliteration_en && (
          <div className="text-gray-800 italic text-lg font-medium">
            <h3>
              <span className=" font-semibold">Transliteration: </span>
              {transliteration_en}
            </h3>
          </div>
        )}

        {translation_en && (
          <div className="">
            <h3 className="text-gray-700 font-medium text-lg">
              <span className="font-semibold">Translation: </span>{" "}
              {translation_en}
            </h3>
          </div>
        )}
        <div className="flex justify-end gap-10">
          {icons.map((icon, index) => (
            <div key={index} className="relative group">
              <Image
                src={icon.src}
                alt={`${icon.title} icon`}
                className="cursor-pointer"
              />
              <div className="absolute left-1/2 bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-[#393939] text-white text-sm px-2 py-1 rounded">
                {icon.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DuaCard
