
const API_URL = "https://www.hatchways.io/api/assessment/students"

const callAPI = () => {
  return fetch(API_URL)
    .then(response => response.json())
}

export default callAPI
