// components/DuasList.js
export default function DuasList({ duas }) {
  // console.log(duas)
  return (
    <div className="overflow-y-auto h-[calc(100vh-112px)] bg-white rounded-lg">
      <h2 className="text-lg font-bold mb-4">Duas</h2>
      {duas.map((dua) => (
        <div className="py-4">
          <p>{dua.dua_name_en}</p>
        </div>
      ))}
    </div>
  )
}
