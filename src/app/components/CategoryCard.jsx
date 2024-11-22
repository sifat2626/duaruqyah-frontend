import { useSearchParams } from "next/navigation"
import Timeline from "./Timeline"
import Image from "next/image"
import fever from "@/assets/images/category/fever.png"
import { useEffect, useState } from "react"
import { getSubcategoriesByCategory } from "../services/SubCategoryService"

function CategoryCard({ category }) {
  const {
    cat_icon,
    cat_id,
    cat_name_bn,
    cat_name_en,
    id,
    no_of_dua,
    no_of_subcat,
  } = category

  const searchParams = useSearchParams()
  const categoryId = searchParams.get("cat")

  const [subCategories, setSubCategories] = useState([])
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        if (categoryId) {
          const subCategoryData = await getSubcategoriesByCategory(cat_id * 1)
          setSubCategories(subCategoryData)
        }
      } catch (error) {
        console.error("Error fetching subcategories")
      }
    }
    fetchSubCategories()
  }, [])
  return (
    <div className="">
      <div className="bg-[#E8F0F5] p-2.5 mx-4 rounded-lg">
        <div className="flex gap-4 items-center">
          <div className="bg-[#CFE0E5] p-2.5 rounded-lg">
            <Image src={fever} />
          </div>
          <div className="flex-1">
            <h3 className="text-[#393939] font-semibold">{cat_name_en}</h3>
            <p className="text-[#7E7E7E] font-poppins text-sm">
              Subcategory: {subCategories.length}
            </p>
          </div>
          <div className=""></div>
        </div>
      </div>
      {categoryId * 1 === cat_id && (
        <div className="ml-8">
          <Timeline subCategories={subCategories} />
        </div>
      )}
    </div>
  )
}

export default CategoryCard
