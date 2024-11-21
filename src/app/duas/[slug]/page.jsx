"use client"
import CategoriesList from "@/app/components/CategoryList"
import DuasList from "@/app/components/DuaList"
import SubCategory from "@/app/components/SubCategory"
import { getCategories } from "@/app/services/CategoryServices"
import { getDuasByCategory } from "@/app/services/DuaServices"
import { getSubcategoriesByCategory } from "@/app/services/SubCategoryService"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

function Page() {
  const pathName = usePathname()
  const slugName = pathName.split("/").at(2) // Get slug from the path
  const searchParams = useSearchParams()
  const categoryId = searchParams.get("cat") * 1 // Get category ID from query params

  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [duas, setDuas] = useState([])

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories()
        // console.log(categoriesData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        if (categoryId) {
          const subCategoryData = await getSubcategoriesByCategory(
            categoryId * 1
          )
          setSubCategories(subCategoryData)
        }
      } catch (error) {
        console.error("Error fetching subcategories")
      }
    }
    fetchSubCategories()
  }, [categoryId])

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
    <div className="flex gap-8">
      {/* Categories Sidebar */}
      <div className="w-[400px]">
        <CategoriesList categories={categories} />
      </div>

      <div className="flex-1">
        {subCategories.map((sub) => (
          <SubCategory sub={sub} key={sub.subcat_id} />
        ))}
      </div>
    </div>
  )
}

export default Page
