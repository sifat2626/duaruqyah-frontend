import general from "@/assets/images/settings/general.svg"
import language from "@/assets/images/settings/language.svg"
import menu from "@/assets/images/sidebar/menu.svg"
import menuGreen from "@/assets/images/settings/menuGreen.svg"
import Image from "next/image"

const items = [
  {
    label: "Language Settings",
    icon: language,
  },
  {
    label: "General Settings",
    icon: general,
  },
  {
    label: "Font Settings",
    icon: menu,
  },
  {
    label: "Appearance Settings",
    icon: menuGreen,
  },
]

function Settings() {
  return (
    <div className="pt-16">
      <h3 className="text-center text-[#393939] text-xl font-bold">Settings</h3>
      <div className="mt-6">
        {items.map((item, index) => (
          <div
            className={`bg-[#F7F8FA] flex items-center gap-4 mb-4 px-4 py-5 rounded-md  ${
              index === 3 && "text-[#1FA45B] border-l-4 border-[#1FA45B]"
            }`}
            key={index}
          >
            <div className={`bg-[#E8F0F5] p-2 rounded-full`}>
              <Image src={item.icon} alt="icon" height={24} width={24} />
            </div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings
