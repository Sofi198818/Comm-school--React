const API_URL = "https://randomuser.me/api";

async function getUser(page) {
  const response = await fetch(`${API_URL}?page=${page}`);

  if (response.ok) {
    const data = await response.json();
    if (Array.isArray(data.results)) {
      return data.results[0];
    }
  }

  throw new Error("Something went wrong");
}

export { getUser };