"use client"
import CategoriesList from "@/app/components/CategoryList"
import Drawer from "@/app/components/shared/Drawer"
import SubCategory from "@/app/components/SubCategory"
import { useDebounce } from "@/app/hooks/useDebounce"
import {
  getCategories,
  searchCategories,
} from "@/app/services/CategoryServices"
import { getDuasByCategory } from "@/app/services/DuaServices"
import { getSubcategoriesByCategory } from "@/app/services/SubCategoryService"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

function Page() {
  const searchParams = useSearchParams()
  const categoryId = searchParams.get("cat") * 1 // Get category ID from query params

  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [duas, setDuas] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  // Fetch Categories
  useEffect(() => {
    fetchCategories(debouncedSearchQuery)
  }, [debouncedSearchQuery])

  useEffect(() => {
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

  const fetchSubCategories = async () => {
    try {
      if (categoryId) {
        const subCategoryData = await getSubcategoriesByCategory(categoryId * 1)
        setSubCategories(subCategoryData)
      }
    } catch (error) {
      console.error("Error fetching subcategories")
    }
  }

  const fetchCategories = async (query) => {
    try {
      let categoriesData
      if (query) {
        categoriesData = await searchCategories(query) // Use search API if query exists
      } else {
        categoriesData = await getCategories() // Fallback to fetching all categories
      }
      setCategories(categoriesData)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value) // Update search query state
  }

  return (
    <div className="flex gap-8 ml-6 xl:ml-0 mt-6 xl:mt-0">
      {/* Categories Sidebar */}
      <div className="w-[400px] hidden lg:block">
        <CategoriesList categories={categories} handleSearch={handleSearch} />
      </div>

      <div className="flex-1 h-[calc(100vh-112px)] overflow-y-auto sidebar-scrollbar pr-1">
        <div className="lg:hidden">
          <Drawer categories={categories} handleSearch={handleSearch} />
        </div>
        {subCategories.map((sub) => (
          <SubCategory sub={sub} key={sub.subcat_id} />
        ))}
      </div>
    </div>
  )
}

export default Page
