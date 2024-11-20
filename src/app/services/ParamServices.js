"use client"

const { useSearchParams, usePathname } = require("next/navigation")

function getSearchParams() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const categoryId = searchParams.get("cat")
  return {
    pathName,
    categoryId,
  }
}

export { getSearchParams }
