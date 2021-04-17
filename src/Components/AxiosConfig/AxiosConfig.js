import axios from "axios";

const instance = axios.create({
  baseURL: "https://boiling-beyond-33119.herokuapp.com",
});

export default instance;
