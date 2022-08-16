import axios from 'axios';

const urlBase = 'https://jsonplaceholder.typicode.com';

const getTodos = async () => {
  const response = await axios.get(`${urlBase}/todos`);
  return response.data;
}

export default getTodos;
