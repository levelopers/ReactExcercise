
const filter = (target, type) => {
  const filterByName = (inputName) => {
    let result = []
    if(!inputName) return target
    for (const person of target) {
      if (person && !(person["firstName"] && person["lastName"])) return
      if (person["firstName"].concat(person["lastName"]).toUpperCase()
        .indexOf(inputName.toUpperCase()) !== -1) {
        result.push(person)
      }
    }
    return result
  }
  const filterByTag = (inputTag) => {
    let result = new Set()
    if (!inputTag) return target
    for (const person of target) {
      if (person && !person["tags"]) continue;
      for (const tag of person["tags"]) {
        if (tag.indexOf(inputTag) !== -1) {
          result.add(person)
        }
      }
    }
    return Array.from(result)
  }
  switch (type) {
    case "name":
      return filterByName;
    case "tag":
      return filterByTag;
  }
}

export default filter