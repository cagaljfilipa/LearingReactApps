import axios from "axios";

const KEY = "AIzaSyCXi1bqsHJWuQ6FkvoRlBMXdSFlF3eO5Mw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
