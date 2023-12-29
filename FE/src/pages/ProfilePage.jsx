import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [teachingLevel, setTeachingLevel] = useState("");
  const [registrationId, setRegistrationId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contact, setContact] = useState("");

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ display: "flex", justifyContent: "right", alignItems: "r", height: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} />
          <TextField
            type="fullname"
            onChange={(e) => setName(e.target.value)}
            label="FullName"
            defaultValue={"Anya Forger"}
            sx= {{borderRadius: 200}}
          />
          <Grid />

          <Grid item xs={12} />
          <TextField
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            defaultValue={"anya.forger@example.com"}
            sx= {{borderRadius: 200}}
          />
          <Grid />

          <Grid item xs={12} />
          <TextField
            type="academic teaching level"
            onChange={(e) => setTeachingLevel(e.target.value)}
            label="Academic Teaching Level"
            defaultValue={"Year 1"}
            sx= {{borderRadius: 200}}
          />
          <Grid />

          <Grid item xs={12} />
          <TextField
            type="registration id"
            onChange={(e) => setRegistrationId(e.target.value)}
            label="Registration ID"
            defaultValue={"7"}
            sx= {{borderRadius: 200}}
          />
          <Grid />

          <Grid item xs={12} />
          <TextField
            type="date of birth"
            onChange={(e) => setDateOfBirth(e.target.value)}
            label="Date Of Birth"
            defaultValue={"1995-03-10"}
            sx= {{borderRadius: 200}}
          />
          <Grid />

          <Grid item xs={12} />
          <TextField
            type="contact"
            onChange={(e) => setContact(e.target.value)}
            label="Contact"
            defaultValue={"+6427000001"}
            sx= {{borderRadius: 200}}
          />
          <Grid />
        </Grid>
      </Box>
    </Container>
  );
}
