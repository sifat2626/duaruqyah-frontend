const { axiosCommon } = require("../hooks/useAxios")

async function getCategories() {
  const { data } = await axiosCommon.get("/categories")
  const { categories } = await data
  console.log(categories)
  return categories
}

export const searchCategories = async (query) => {
  try {
    const response = await axiosCommon.get(`/categories/search?name=${query}`)
    return response.data.categories // Assuming API returns `categories`
  } catch (error) {
    console.error("Error searching categories:", error)
    throw error
  }
}

export { getCategories }
