const { axiosCommon } = require("../hooks/useAxios")

async function getCategories() {
  const { data } = await axiosCommon.get("/categories")
  const { categories } = await data
  return categories
}

export { getCategories }
