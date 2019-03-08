
const average = (grades) => {
  if (Object.prototype.toString.call(grades).slice(8, -1) !== "Array") return null
  let sum = 0
  for (let score of grades) {
    sum += Number(score)
  }
  return sum / grades.length
}

export default average