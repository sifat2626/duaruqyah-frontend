const { axiosCommon } = require("../hooks/useAxios")

async function getDuasByCategory(cat_id) {
  const { data } = await axiosCommon.get(`/duas/category/${cat_id}`)
  const { duas } = data
  // console.log(duas)
  return duas
}
async function getDuasBySubCategory(subcat_id) {
  const { data } = await axiosCommon.get(`/duas/subcategory/${subcat_id}`)
  const { duas } = data
  console.log(duas)
  return duas
}

export { getDuasByCategory, getDuasBySubCategory }
