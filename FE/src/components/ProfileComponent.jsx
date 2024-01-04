import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import { useCPContext } from "../context/CPContext";

export default function ProfileComponent() {
  const { currentCP } = useCPContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teachingLevel, setTeachingLevel] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    let fullName = data.get("fullName");
    let Email = data.get("email");
    let Password = data.get("password");
    let academicTeachingLevel = data.get("academic teaching level");
    let userName = data.get("userName");
    let location = data.get("location");
    let registrationId = data.get("registration id");
    let dateOfBirth = data.get("date of birth");
    let contact = data.get("contact");

    let loggedInUser = null;

    //login successful/true if both values exist and match
    //let isLoggedIn = (user && password && user === password)

    try {
      let response;
      if (!currentCP.userName) {
        // email
        response = await axios.put(
          `http://localhost:8080/api/teacher/${currentCP.id}`,
          {
            email: Email,
            password: Password ? Password : currentCP.password,
            teacherName: fullName,
            grade: academicTeachingLevel,
            registrationId: registrationId,
            contact: contact,
            DOB: dateOfBirth,
          }
        );
      } else {
        response = await axios.put(
          `http://localhost:8080/api/student/${currentCP.id}`,
          {
           
            studentName: fullName,
            userName: userName,
            email: Email,
            password: Password ? Password : currentCP.password,
            location: location,
            contact: contact,
            DOB: dateOfBirth,
          }
        );
      }
      loggedInUser = response.data;
      console.log(loggedInUser);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid container spacing={2}>
          <FormControl>
            <Grid item xs={12} />
            <TextField
              name="fullName"
              type="fullname"
              label="FullName" 
              defaultValue={currentCP.userName ? currentCP.studentName : currentCP.teacherName}
              sx={{ borderRadius: 200 }}
            />
            <Grid />
            <br />
            <Grid item xs={12} />
            <TextField
              name="email"
              type="email"
              label="Email"
              defaultValue={currentCP.email}
              sx={{ borderRadius: 200, width: 300 }}
            />
            <Grid />
            <br />

           { currentCP.userName ? // student UserName
           <> 
           <Grid item xs={12} />
            <TextField
              name="userName"
              type="userName"
              label="userName"
              defaultValue={currentCP.userName}
              sx={{ borderRadius: 200, width: 300 }}
            />
            <Grid />
            <br /> 
            </>
            : null
            }

            <Grid item xs={12} />
            <TextField
              name="password"
              label="Password"
              sx={{ borderRadius: 200 }}
            />
            <Grid />
            <br />

            <Grid item xs={12} />
            <TextField
              name="location"
              type="location"
              label="location"
              defaultValue={currentCP.location}
              sx={{ borderRadius: 200 }}
            />
            <Grid />
            <br />

            <Grid item xs={12} />
            <TextField
              name="academic teaching level"
              type="academic teaching level"
              label={currentCP.userName ? "grade" : "Academic Teaching Level"}
              defaultValue={currentCP.grade} // student unable to modify as it wasnt stated in the response above
              sx={{ borderRadius: 200 }}
            />
            <Grid />
            <br />
            { !currentCP.userName ? // student UserName
           <> 
            <Grid item xs={12} />
            <TextField
              name="registration id"
              type="registration id"
              label="Registration ID"
              defaultValue={currentCP.registrationId}
              sx={{ borderRadius: 200 }}
            />
            <Grid />
            <br />
          </>
          : null }

            <Grid item xs={12} />
            <TextField
              name="date of birth"
              type="date of birth"
              label="Date Of Birth"
              defaultValue={currentCP.DOB ? currentCP.DOB.slice(0, 10) : ""}
              sx={{ borderRadius: 200 }}
            />
            <Grid />
            <br />

            <Grid item xs={12} />
            <TextField
              name="contact"
              type="contact"
              label="Contact"
              defaultValue={currentCP.contact}
              sx={{ borderRadius: 200 }}
            />
            <Grid />
            <br />
          </FormControl>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update
        </Button>
      </Box>
    </Container>
  );
}
