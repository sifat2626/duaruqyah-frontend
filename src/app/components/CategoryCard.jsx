import { useSearchParams } from "next/navigation"
<<<<<<< HEAD
import Timeline from "./Timeline"
import Image from "next/image"
import fever from "@/assets/images/category/fever.png"
import { useEffect, useState } from "react"
import { getSubcategoriesByCategory } from "../services/SubCategoryService"
import { useRouter } from "next/navigation"
=======
>>>>>>> parent of 175694c (dua by sub category)

function CategoryCard({ category, subCategories }) {
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
  const router = useRouter()
  const categoryId = searchParams.get("cat")
<<<<<<< HEAD

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

  function handleCategory(id) {
    const params = new URLSearchParams(window.location.search)
    params.set("cat", id)
    router.push(`?${params.toString()}`)
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        handleCategory(cat_id)
      }}
    >
      <div
        className={`${
          cat_id === categoryId * 1 ? "bg-[#E8F0F5]" : "bg-white"
        } p-2.5 mx-4 rounded-lg mb-2.5`}
      >
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
=======
  return (
    <div>
      <h3>{cat_name_en}</h3>
      {categoryId * 1 === cat_id ? subCategories.length : ""}
>>>>>>> parent of 175694c (dua by sub category)
    </div>
  )
}

export default CategoryCard
