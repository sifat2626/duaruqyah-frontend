"use client"
import CategoriesList from "@/app/components/CategoryList"
import { getCategories } from "@/app/services/CategoryServices"
import { getDuasByCategory } from "@/app/services/DuaServices"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

function Page() {
  const pathName = usePathname()
  const slugName = pathName.split("/").at(2) // Get slug from the path
  const searchParams = useSearchParams()
  const categoryId = searchParams.get("cat") // Get category ID from query params

  const [categories, setCategories] = useState([])
  const [duas, setDuas] = useState([])

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories()
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }
    fetchCategories()
  }, [])

  // Fetch Duas Based on Selected Category
  useEffect(() => {
    const fetchDuas = async () => {
      try {
        if (categoryId) {
          const duasData = await getDuasByCategory(categoryId * 1)
          setDuas(duasData)
        }
      } catch (error) {
        console.error("Error fetching duas:", error)
      }
    }
    fetchDuas()
  }, [categoryId]) // Re-run when categoryId changes

  return (
    <div className="flex">
      {/* Categories Sidebar */}
      <div className="w-[400px]">
        <CategoriesList categories={categories} />
      </div>

      {/* Duas Content */}
      {/* <div className="flex-1 p-4 bg-gray-100">
        {duas.length ? (
          <ul>
            {duas.map((dua) => (
              <li key={dua.id} className="mb-2">
                {dua.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No Duas found for this category.</p>
        )}
      </div> */}
    </div>
  )
}

export default Page
