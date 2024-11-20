"use client"
import search from "@/assets/images/navbar/search.svg"
import Image from "next/image"
import CategoryCard from "./CategoryCard"

export default function CategoriesList({ categories }) {
  // console.log(categories)
  return (
    <div className="w-[400px] flex flex-col h-screen">
      {/* Header (fixed height) */}
      <div className="bg-[#1FA45B] rounded-t-xl">
        <h2 className="text-white text-center w-full py-5 text-lg font-medium">
          Categories
        </h2>
      </div>

      {/* Scrollable list */}
      <div className=" flex-1 bg-white overflow-y-auto ">
        <div className="relative p-4">
          <input
            type="text"
            placeholder="Search by Categories"
            className="w-full p-3 border-2  rounded-lg pl-12 focus:outline-none focus:border-2 focus:border-[#1FA45B]"
          ></input>
          <Image
            alt=""
            src={search}
            className="absolute top-1/2 left-8 -translate-y-1/2 bg-white"
          />
        </div>

        {categories.map((category) => (
          <div className="py-6">
            <CategoryCard key={category.cat_id} category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}
