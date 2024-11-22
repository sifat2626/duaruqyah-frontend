"use client"
import { useEffect, useState } from "react"
import { getDuasBySubCategory } from "../services/DuaServices"
import DuaCard from "./DuaCard"

function SubCategory({ sub }) {
  const { subcat_id } = sub
  const [duas, setDuas] = useState([])

  useEffect(() => {
    const fetchDuas = async () => {
      try {
        const duaData = await getDuasBySubCategory(subcat_id)
        console.log(duaData)
        setDuas(duaData)
      } catch (error) {
        console.error(`Error fetching duas`)
      }
    }
    fetchDuas()
  }, [])

  return (
    <div className="">
      <div className="bg-white py-4 px-8 rounded-lg mb-4">
        <h3 className="text-[#393939]">
          <span className="text-[#1FA45B] font-semibold mr-2.5">Section:</span>{" "}
          {sub.subcat_name_en}
        </h3>
      </div>
      {duas.map((dua) => (
        <DuaCard dua={dua} key={dua.dua_id} />
      ))}
    </div>
  )
}

export default SubCategory
