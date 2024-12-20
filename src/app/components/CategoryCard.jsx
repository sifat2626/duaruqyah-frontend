"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Timeline from "./Timeline"
import Image from "next/image"
import fever from "@/assets/images/category/fever.png"
import { useEffect, useState } from "react"
import { getSubcategoriesByCategory } from "../services/SubCategoryService"

function CategoryCard({ category }) {
  const pathname = usePathname()
  const {
    cat_icon,
    cat_id,
    cat_name_bn,
    cat_name_en,
    id,
    no_of_dua,
    no_of_subcat,
  } = category

  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryId = searchParams.get("cat")
  // const [cat, setCat] = useQueryState("subcat")
  // const [subcat, setSubcat] = useQueryState("subcat")

  const [subCategories, setSubCategories] = useState([])

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const subCategoryData = await getSubcategoriesByCategory(cat_id)
        setSubCategories(subCategoryData)
      } catch (error) {
        console.error("Error fetching subcategories", error)
      }
    }
    fetchSubCategories()
  }, [categoryId, cat_id])

  function handleCategory(id) {
    router.push(
      `/duas/${cat_name_en.toLowerCase().replaceAll(" ", "-")}/?cat=${cat_id}`
    )
  }

  return (
    <div className="cursor-pointer" onClick={handleCategory}>
      <div
        className={`${
          cat_id === categoryId * 1 ? "bg-[#E8F0F5]" : "bg-white"
        } p-2.5 mx-4 rounded-lg mb-2.5`}
      >
        <div className="flex gap-4 items-center">
          <div className="bg-[#CFE0E5] p-2.5 rounded-lg">
            <Image src={fever} alt="Category Icon" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#393939] font-semibold">{cat_name_en}</h3>
            <p className="text-[#7E7E7E] font-poppins text-sm">
              Subcategory: {subCategories.length}
            </p>
          </div>
        </div>
      </div>
      {categoryId * 1 === cat_id && (
        <div className="ml-8">
          <Timeline
            subCategories={subCategories}
            handleCategory={handleCategory}
          />
        </div>
      )}
    </div>
  )
}

export default CategoryCard
