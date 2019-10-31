import axios from "axios";

export default axios.create({
  baseURL: "https:\\api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 56b58f9a520d422b7c16f27a0d3f622b11cda96ca3724f5966753000d364ac43"
  }
});
