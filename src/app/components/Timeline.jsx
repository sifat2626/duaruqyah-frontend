"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import DuaBySub from "./DuaBySub.jsx"
import { getDuasBySubCategory } from "../services/DuaServices"

const Timeline = ({ subCategories }) => {
  const [duas, setDuas] = useState([])
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentSubcat = searchParams.get("subcat")

  const handleDuaBySub = (id) => {
    // Use URLSearchParams for a clean URL update
    const params = new URLSearchParams(searchParams.toString())
    params.set("subcat", id) // Set the new subcat value
    router.push(`?${params.toString()}`) // Navigate to the updated URL
  }

  useEffect(() => {
    const fetchDuas = async () => {
      if (currentSubcat) {
        try {
          const duasData = await getDuasBySubCategory(Number(currentSubcat))
          setDuas(duasData)
        } catch (error) {
          console.error("Error fetching duas:", error)
        }
      } else {
        setDuas([]) // Clear the duas if no subcat is selected
      }
    }
    fetchDuas()
  }, [currentSubcat])

  return (
    <div className="relative mt-1 pt-2">
      {/* Dotted Vertical Line */}
      <div className="absolute left-6 top-0 h-full transform -translate-x-1/2 border-l-2 border-dotted border-[#1FA45B]"></div>
      {subCategories.map((item) => (
        <div key={item.subcat_id} className="mb-6 flex items-center">
          {/* Content */}
          <div
            className="ml-10 cursor-pointer"
            onClick={() => handleDuaBySub(item.subcat_id)}
          >
            <button
              className={`font-semibold text-left text-sm ${
                Number(currentSubcat) === item.subcat_id
                  ? "text-[#1FA45B]"
                  : "text-[#393939]"
              }`}
            >
              <div className="relative">
                <div className="absolute -left-5 top-[4px] size-2 bg-[#1FA45B] rounded-full"></div>
                <p>{item.subcat_name_en}</p>
              </div>
            </button>
            {Number(currentSubcat) === item.subcat_id && (
              <DuaBySub duas={duas} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
