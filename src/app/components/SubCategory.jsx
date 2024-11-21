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
    <div>
      <h3>{sub.subcat_name_en}</h3>
      {duas.map((dua) => (
        <DuaCard dua={dua} key={dua.dua_id} />
      ))}
    </div>
  )
}

export default SubCategory
