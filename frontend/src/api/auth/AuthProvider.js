// Verwaltet die Authentifizierungszustände und -aktionen
import React, { createContext, useContext, useState, useEffect } from "react";
import { login, register } from "../config/api"; // Importiert die API-Funktionen
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Überprüfe beim Laden der App, ob der Benutzer bereits eingeloggt ist
    // Wenn ein gespeichertes Token vorhanden ist, aktualisiere den Benutzerstatus
    const token = localStorage.getItem("token");
    if (token) {
      // Hier könntest du die Gültigkeit des Tokens überprüfen und den Benutzerstatus aktualisieren
    }
  }, []);

  const handleLogin = async (credentials) => {
    try {
      const response = await login(credentials);
      const token = response.token;
      localStorage.setItem("token", token);
      console.log("response bitte", response);
      setUser(response.user);
      localStorage.setItem("username", response.user.username);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };

  const signUp = async (userData) => {
    try {
      await register(userData);
      // Optionally handle successful registration
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, handleLogin, signUp, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
