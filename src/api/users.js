const urlAPI = "https://jsonplaceholder.typicode.com/users/";

const getUsers = async (id = '') => {
  const response = await fetch(urlAPI + id)
  const data = response.json()
  return data
};

export default getUsers;
