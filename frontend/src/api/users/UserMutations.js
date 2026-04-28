import api from "../../config/api";

export async function createNewUser(
  newUserName,
  newUserEmail,
  newUserPassword
) {
  try {
    const result = await api.post("/api/users", {
      username: newUserName,
      email: newUserEmail,
      password: newUserPassword,
    });
    const newUser = result.data;
    return newUser;
  } catch (error) {
    console.error("Fehler beim Erstellen eines neuen Benutzers:", error);
    throw error;
  }
}

export async function updateUser(userId, updatedUserData) {
  try {
    const result = await api.put(`/api/users/${userId}`, updatedUserData);
    const updatedUser = result.data;
    return updatedUser;
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Benutzers:", error);
    throw error;
  }
}

export async function deleteUser(userId) {
  try {
    const result = await api.delete(`/api/users/${userId}`);
    const deletedUserId = result.data;
    return deletedUserId;
  } catch (error) {
    console.error("Fehler beim Löschen des Benutzers:", error);
    throw error;
  }
}
