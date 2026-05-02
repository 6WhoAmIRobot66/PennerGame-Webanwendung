import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../api/auth/AuthProvider"; 
import {
  Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      // GEÄNDERT AUF 5001
      const response = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        if (handleLogin) {
          handleLogin(response.data);
        }

        alert("Login erfolgreich!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login Fehler:", error.response?.data);
      setError(error.response?.data?.message || "Login fehlgeschlagen. (Port 5001)");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}><LockOutlinedIcon /></Avatar>
          <Typography component="h1" variant="h5">Pennergame Login</Typography>
          {error && <Typography color="error" variant="body2" sx={{ mt: 2 }}>{error}</Typography>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Adresse" name="email" autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="Passwort" type="password" id="password" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Einloggen</Button>
            <Grid container justifyContent="center">
              <Grid item><Link href="/sign-up" variant="body2">Noch kein Penner? Registrieren</Link></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
