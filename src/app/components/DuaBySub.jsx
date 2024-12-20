import { useQueryState } from "nuqs"
import { FaArrowRight } from "react-icons/fa6"
function DuaBySub({ duas }) {
  const [dua, setDua] = useQueryState("dua")
  function handleDua(id) {
    setDua(id)
  }
  return (
    <div className="flex flex-col gap-4 pt-4">
      {duas.map((dua) => (
        <div className="flex gap-2 items-center ml-4 " key={dua.dua_id}>
          <FaArrowRight className="text-[#1FA45B]" />
          <p
            className="text-sm text-[#393939]"
            onClick={() => {
              handleDua(dua.dua_id)
            }}
          >
            {dua.dua_name_en}
          </p>
        </div>
      ))}
    </div>
  )
}
export default DuaBySub
