import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/auth",
  withCredentials: true,
});

const serviceAuthors = {
  Signup: (body) =>
    instance.post("/signup", body).then((response) => response.data),
};

export default serviceAuthors;
