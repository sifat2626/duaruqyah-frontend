import { useSearchParams } from "next/navigation"

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
  const categoryId = searchParams.get("cat")
  return (
    <div>
      <h3>{cat_name_en}</h3>
      {categoryId * 1 === cat_id ? subCategories.length : ""}
    </div>
  )
}

export default CategoryCard
