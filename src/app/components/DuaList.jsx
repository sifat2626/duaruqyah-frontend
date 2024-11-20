// components/DuasList.js
export default function DuasList({ duas }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Duas</h2>
      {duas.length > 0 ? (
        <ul>
          {duas.map((dua) => (
            <li key={dua.id} className="mb-2 p-2 bg-white rounded shadow-sm">
              {dua.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No duas available for this category.</p>
      )}
    </div>
  )
}
