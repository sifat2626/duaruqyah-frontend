"use client"
import { useRouter, useSearchParams } from "next/navigation"
import DuasList from "./DuaList"
import DuaBySub from "./DuaBySub"
import { useEffect, useState } from "react"
import { getDuasBySubCategory } from "../services/DuaServices"

const Timeline = ({ subCategories }) => {
  const [duas, setDuas] = useState([])
  const router = useRouter()
  const searchParams = useSearchParams()
  const subcat = searchParams.get("subcat")

  function handleDuaBySub(id) {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set("subcat", id)
    router.push(`?${searchParams.toString()}`)
  }

  useEffect(() => {
    const fetchDuas = async () => {
      try {
        if (subcat) {
          const duasData = await getDuasBySubCategory(subcat * 1)
          setDuas(duasData)
        }
      } catch (error) {
        console.error("Error fetching duas:", error)
      }
    }
    fetchDuas()
  }, [subcat])

  return (
    <div className="relative mt-1 pt-2">
      {/* Dotted Vertical Line */}
      <div className="absolute left-6 top-0 h-full transform -translate-x-1/2 border-l-2 border-dotted border-[#1FA45B]"></div>
      {subCategories.map((item, index) => (
        <div key={index} className="mb-6 flex items-center">
          {/* Dot */}
          {/* <div className="relative z-10 flex items-center justify-center">
            <div className="-mr-12 size-2 rounded-full bg-[#1FA45B]"></div>
          </div> */}
          {/* Content */}
          <div
            className="ml-10"
            onClick={() => {
              handleDuaBySub(item.subcat_id)
            }}
          >
            <button
              className={`font-semibold text-left text-sm ${
                searchParams.get("subcat") * 1 === item.subcat_id
                  ? "text-[#1FA45B]"
                  : "text-[#393939]"
              }`}
            >
              <div className="relative">
                <div className="absolute -left-5 top-[4px] size-2 bg-[#1FA45B] rounded-full"></div>
                <p>{item.subcat_name_en}</p>
              </div>
            </button>
            {subcat * 1 === item.subcat_id && <DuaBySub duas={duas} />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
