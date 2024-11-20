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

  console.log(cat_id)
  return (
    <div>
      <h3>{cat_name_en}</h3>
    </div>
  )
}

export default CategoryCard
