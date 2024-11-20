"use client"

export default function CategoriesList({ categories }) {
  return (
    <div className="w-[400px] flex flex-col h-screen">
      {/* Header (fixed height) */}
      <div className="bg-[#1FA45B] rounded-t-xl">
        <h2 className="text-white text-center w-full py-5 text-lg font-medium">
          Categories
        </h2>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 bg-white overflow-y-auto">
        {[...Array(20)].map((_, index) => (
          <h3 key={index} className="py-8">
            Item {index + 1}
          </h3>
        ))}
      </div>
    </div>
  )
}
