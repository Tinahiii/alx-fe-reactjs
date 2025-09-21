export async function fetchAdvancedUserData({ username, location, minRepos }) {
  const query = [];
  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);
  const q = query.join(" ");

  const response = await fetch(`https://api.github.com/search/users?q=${q}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_KEY}` // Vite uses VITE_ prefix
    }
  });
  const data = await response.json();
  return data;
}
 
import axios from "axios";

// Advanced search function
export async function fetchAdvancedUserData({ username, location, minRepos }) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query.trim()}`
  );

  return response.data;
}
