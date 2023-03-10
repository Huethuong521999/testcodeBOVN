import axios from "axios";

export const getList = () => {
  const url = `https://dummyjson.com/products?limit=100`;
  return axios.post(url);
};
