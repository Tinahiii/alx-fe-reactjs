import axios from "axios";

// Function to fetch GitHub user data
export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}
