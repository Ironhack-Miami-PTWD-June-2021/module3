import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export const serviceAuthors = {
  getAuthorsList: () =>
    instance.get("/authors").then((response) => response.data),
  getAuthor: (id) =>
    instance.get(`/authors/${id}`).then((response) => response.data),
};

export const serviceBooks = {
  getBooksList: () => instance.get("/books").then((response) => response.data),
  getBook: (id) =>
    instance.get(`/books/${id}`).then((response) => response.data),
};
