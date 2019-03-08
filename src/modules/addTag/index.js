
const addTag = (prevStudents, studentId, tagInput) => {
  let newStudents = []
  prevStudents.map(stu => {
    if (stu["id"] === studentId) {
      let newStu = stu
      //add new tag
      if (!stu["tags"]) {
        newStu["tags"] = [tagInput]
      } else {
        stu["tags"].push(tagInput)
      }
      newStudents.push(stu)
      return
    }
    newStudents.push(stu)
  })
  return newStudents
}
export default addTag