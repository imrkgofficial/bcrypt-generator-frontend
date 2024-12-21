const API_BASE_URL = "http://localhost:8000";

// Function to generate bcrypt hash
export const generateHash = async (password) => {
  const response = await fetch(`${API_BASE_URL}/api/generate-hash`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password }),
  });

  const data = await response.json();
  return data;
};

// Function to check bcrypt hash
export const verifyHash = async (password, hash) => {
  const response = await fetch(`${API_BASE_URL}/api/check-hash`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, hash }),
  });

  const data = await response.json();
  return data;
};
