import axios from "axios";

const BASE_URL = "http://localhost:5001/api/auth";

export const loginUser = async (email, password) => {
  const res = await axios.post(`${BASE_URL}/signin`, { email, password });
  return res.data;
};

export const signupUser = async (name, email, password) => {
  const res = await axios.post(`${BASE_URL}/signup`, { name, email, password });
  return res.data;
};
