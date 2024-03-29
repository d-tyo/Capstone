import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { levels } from "./AcademicLevelsMenu";
import { useNavigate } from "react-router-dom";
import { useCPContext } from "../context/CPContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import DateChange from "./DateChange";

// Create a Material-UI theme
const theme = createTheme();

function SignUpForm() {
  const { currentCP, handleUpdateCP } = useCPContext();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState(null); // for the conditional statement
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [customDate, setCustomDate] = useState("");
  const [errMsg, setErrMsg] = React.useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [registrationId, setRegistrationId] = useState("");
  const [AL, setAL] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAL(event.target.value);
  };

  const handleSubmit = async (e) => {
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
    } else if (userEmail !== "" || userPassword !== "" || fullName !== "") {
      console.log(userName === "");
      try {
        let response;
        if (userName === null) {
          //
          response = await axios
            .post("/api/teacher/create", {
              email: userEmail,
              password: userPassword,
              teacherName: fullName,
              level: AL,
              registrationId: registrationId,
              contact: contact,
              DOB: customDate,
            })
            .then((response) => console.log(response.data));
        } else {
          response = await axios.post("/api/student/create", {
            email: userEmail,
            password: userPassword,
            userName: userName,
            studentName: fullName,
            grade: AL,
          });
        }
        //Maybe for out of scope in the future when admin sign up they can add student function
      } catch (err) {
        console.log(err.message);
        setErrMsg(err.message + ": " + err.response.data.result);
      }
    }
    // need to make sure this user object matches the DB model
    //  - add this user into the DB using axios.post

    navigate("/"); // ("/ - index") taking to main route a.k.a homepage
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
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="userName"
                  name="userName"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
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
                <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact"
                  name="contact"
                  onChange={(e) => setContact(e.target.value)}
                  autoComplete="contact"
                />
              </Grid>
              <Grid item xs={12}>
                <DateChange setDueDate={setCustomDate} />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Academic Level
                  </InputLabel>

                  {/*  - this matches the list in AcademicLevelsMenu, ideally both use same variable */}
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
                <Link to="/login" variant="body2">
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
