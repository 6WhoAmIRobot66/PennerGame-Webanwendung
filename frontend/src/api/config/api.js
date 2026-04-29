import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050",
});

// Benutzerpunkte abrufen
export async function getUserPoints(userId) {
  try {
    const result = await api.get(`/user/${userId}/points`);
    const points = result.data;
    return points;
  } catch (error) {
    console.error("Fehler beim Abrufen der Benutzerpunkte:", error);
    throw error;
  }
}

// Benutzer anmelden
export async function login(credentials) {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Fehler beim Einloggen:", error);
    throw error;
  }
}

// Benutzer registrieren
export async function register(userData) {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
    throw error;
  }
}

export default api;
