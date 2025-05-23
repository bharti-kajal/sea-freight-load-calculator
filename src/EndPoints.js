import axios from "axios";
const BASE_URL = "https://sea-freight-calculator-backend-1.onrender.com/api";

const EndPoints = {
  list: async (values, param) => {
    try {
      const res = await axios.post(`${BASE_URL}/${param}`, {
        length: Number(values.length),
        width: Number(values.width),
        height: Number(values.height),
        quantity: Number(values.quantity),
        weight: Number(values.weight)
      });
      return res;
    } catch (err) {
      console.error("Error in fetching API", err);
      throw err;
    }
  },

    login: async (values, param) => {
    try {
      const res = await axios.post(`${BASE_URL}/${param}`, {
        email: values.email,
        password: values.password
      });
      return res;
    } catch (err) {
      console.error("Error in fetching API", err);
      throw err;
    }
  },

};

export default EndPoints;
