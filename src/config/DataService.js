import axios from "axios";


// const API_ENDPOINT = "http://localhost:3015/api/";
const API_ENDPOINT = "http://35.177.56.74:3015/api/";

const API_USERS="http://localhost:3000/user/";



const DataService = axios.create({
// baseURL: API_ENDPOINT,
baseURL:API_USERS,


  // headers: {
  //   auth:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYThjM2IzZWQyMmQzYWQzYmY4OTQ3In0sImlhdCI6MTY3Mjk5NTEwMX0.OA8QSPqTf392r4uIJxI44_2v8SAFvFKB4rSPH9GdHvY",
  // },
});
// const DataService=
export { DataService, API_ENDPOINT,API_USERS };
