const { axiosCommon } = require("../hooks/useAxios")

async function getSubcategoriesByCategory(categoryId) {
  const { data } = await axiosCommon.get(
    `/categories/${categoryId}/subcategories`
  )
  const { subcategories } = await data
  console.log(subcategories)
  return subcategories
}

export { getSubcategoriesByCategory }
