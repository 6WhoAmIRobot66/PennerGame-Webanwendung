import api from "../../config/api";

// Benutzerpunkte abrufen
export async function getUserPoints(userId) {
  try {
    const result = await api.get(`/api/users/${userId}/points`);
    const points = result.data;
    return points;
  } catch (error) {
    console.error("Fehler beim Abrufen der Benutzerpunkte:", error);
    throw error;
  }
}

//Benutzer abrufen
export async function fetchAllUsers() {
  try {
    const result = await api.get("/api/users");
    const users = result.data;
    return users;
  } catch (error) {
    throw new Error("Fehler beim Abrufen aller Benutzer: " + error.message);
  }
}

// Statistiken abrufen
export async function fetchAllStats() {
  try {
    const result = await api.get("/api/stats");
    const stats = result.data;
    return stats;
  } catch (error) {
    throw new Error("Fehler beim Abrufen der Statistiken: " + error.message);
  }
}

// Abfrage von Quizfragen
export async function fetchAllQuestions() {
  try {
    const result = await api.get("/api/question");
    const questions = result.data;
    return questions;
  } catch (error) {
    throw new Error("Fehler beim Abrufen der Fragen: " + error.message);
  }
}

//Abfrage von Antworten
export async function fetchAllAnswers() {
  try {
    const result = await api.get("/api/answer");
    const answers = result.data;
    return answers;
  } catch (error) {
    throw new Error("Fehler beim Abrufen der Antworten: " + error.message);
  }
}

// Benutzer nach ID abrufen
export async function fetchUserById(userId) {
  try {
    const result = await api.get(`/api/users/${userId}`);
    const user = result.data;
    return user;
  } catch (error) {
    console.error("Fehler beim Abrufen des Benutzers nach ID:", error.message);
    throw error;
  }
}
