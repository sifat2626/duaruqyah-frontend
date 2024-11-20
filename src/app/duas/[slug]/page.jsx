import CategoriesList from "@/app/components/CategoryList"
import { getCategories } from "@/app/services/CategoryServices"

async function page() {
  const categories = await getCategories()
  return (
    <div>
      <div className="">
        <CategoriesList categories={categories} />
      </div>
    </div>
  )
}

export default page
