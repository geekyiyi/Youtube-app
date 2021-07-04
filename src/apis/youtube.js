import axios from "axios";

const KEY = "AIzaSyCPtKCGr65W-2-jn4agXS6go6nBgXYKbVw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
