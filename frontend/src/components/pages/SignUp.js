import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, createTheme, ThemeProvider
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const defaultTheme = createTheme();

export function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const data = new FormData(event.currentTarget);
    const payload = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      penner_name: data.get("penner_name")
    };

    try {
      // FESTEINSTELLUNG: PORT 5001
      await axios.post("http://localhost:5001/api/auth/register", payload);
      alert("Registrierung erfolgreich! Ab zum Login.");
      navigate("/login");
    } catch (err) {
      console.error("Registrierungs-Fehler:", err.response?.data);
      setError(err.response?.data?.message || "Fehler beim Registrieren (Port 5001)");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}><LockOutlinedIcon /></Avatar>
          <Typography component="h1" variant="h5">Neuer Penner</Typography>
          {error && <Typography color="error" variant="body2" sx={{ mt: 2 }}>{error}</Typography>}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}><TextField name="username" required fullWidth label="Benutzername" /></Grid>
              <Grid item xs={12}><TextField name="penner_name" required fullWidth label="Name deines Penners" /></Grid>
              <Grid item xs={12}><TextField name="email" required fullWidth label="Email Adresse" /></Grid>
              <Grid item xs={12}><TextField name="password" required fullWidth label="Passwort" type="password" /></Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Registrieren</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;
