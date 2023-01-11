import axios from 'axios';

const randomUsersGenerator = axios.create({
  baseURL: "https://randomuser.me/api/",
})

export default randomUsersGenerator;
