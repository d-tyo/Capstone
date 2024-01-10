import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCPContext } from "../context/CPContext";
import { useNavigate } from "react-router-dom";
import { levels } from "./AcademicLevelsMenu";

// Create a Material-UI theme
const theme = createTheme();

function SignUpForm() {
  const { currentCP, handleUpdateCP } = useCPContext();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [registrationId, setRegistrationId] = useState("");
  const [AL, setAL] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAL(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setLoginAttempts(loginAttempts + 1);
    } else if (userEmail.length < 8) {
      setSubmitResult("Email address must be at least 8 characters long");
      setLoginAttempts(loginAttempts + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setLoginAttempts(loginAttempts + 1);
    } else {
      setSubmitResult("Successful sign-up.");
      handleUpdateCP({
        name: userName,
        email: userEmail,
        password: userPassword,
      }); // need to make sure this user object matches the DB model
      // TODO - add this user into the DB using axios.post

      navigate("/"); // ("/ - index") taking to main route a.k.a homepage
    }
  };

  if (loginAttempts >= 5) return <p>Go away hackers, attempts exceeded</p>;
  if (currentCP.email) return <p>You are already logged in.</p>;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Academic Level
                  </InputLabel>

                  {/*  - make sure this matches the list in AcademicLevelsMenu, ideally both use same variable */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={AL}
                    label="Academic Level"
                    onChange={handleChange}
                  >
                    {levels.map((level) => (
                      <MenuItem value={level}>{level}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="registrationId"
                  label="Registration Id"
                  name="registrationId"
                  onChange={(e) => setRegistrationId(e.target.value)}
                  autoComplete="registrationId"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Log In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUpForm;
