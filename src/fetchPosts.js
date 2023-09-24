import axios from "axios";

const fetchPosts = async (setPosts) => {
  try {
    const response = await axios.get(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    );
    setPosts(response.data);
  } catch (error) {
    console.error("Fetch failed", error);
  }
};

export default fetchPosts;
