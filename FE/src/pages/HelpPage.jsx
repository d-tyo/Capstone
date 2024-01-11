import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import HelpSupport from "../assets/HelpSupport.jpg";

export default function HelpPage() {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmitQuery = () => {
    // Implement logic to send the query to the support team
    console.log(`Query submitted: ${query}`);
    // You can add more sophisticated logic, like sending an email or making an API call
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h3" gutterBottom style={{ textAlign: "center", marginBottom: "10px" }}>
        <b>Help Center</b>
      </Typography>

      <Typography variant="body1" paragraph style={{ textAlign: "left", marginBottom: "20px" }}>
        Welcome to the Circle Play Help Center! If you have any questions or
        issues, you can find answers and guidance below.
      </Typography>

      <img
        src={HelpSupport}
        width="50%"
        alt="HelpSupport"
        style={{ zIndex: 1, marginBottom: "20px", maxWidth: "100%" }}
      />

      <Typography variant="h4" gutterBottom style={{ textAlign: "left", marginBottom: "10px" }}>
        Frequently Asked Questions (FAQs)
      </Typography>
      <Typography variant="body1" paragraph style={{ textAlign: "left", marginBottom: "20px" }}>
        <strong>Here are some common questions and answers that might help you:</strong>
      </Typography>

      <Typography style={{ textAlign: "left", marginBottom: "10px" }}>
        <b>1. How do I access my e-learning courses?</b>
        <br />
        You can access your e-learning courses by logging into your account on our platform. Once logged in, navigate to your dashboard, where you will find all your materials.
      </Typography>

      <Typography style={{ textAlign: "left", marginBottom: "10px" }}>
        <b>2. What do I do if I forget my password?</b>
        <br />
        If you forget your password, you can use the 'Forgot Password' option on the login page. Follow the instructions sent to your email to reset your password securely.
      </Typography>

      <Typography variant="h4" gutterBottom style={{ textAlign: "left", marginBottom: "10px" }}>
        Contact Support
      </Typography>
      <Typography variant="body1" paragraph style={{ textAlign: "left", marginBottom: "20px" }}>
        If you couldn't find the information you need, please feel free to contact our support team.
      </Typography>
      <Typography variant="body1" style={{ textAlign: "left", marginBottom: "20px" }}>
        Email: <a href="mailto:support@circleplay.com">support@circleplay.com</a>
      </Typography>

      <Typography variant="h4" gutterBottom style={{ textAlign: "left", marginTop: "20px" }}>
        Submit a Query
      </Typography>
      <Typography variant="body1" paragraph style={{ textAlign: "left", marginBottom: "10px" }}>
        If you have a specific question or need assistance, you can submit a query using the form below.
      </Typography>

      <TextField
        label="Your Query"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={query}
        onChange={handleQueryChange}
        margin="normal"
        style={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmitQuery}>
        Submit Query
      </Button>
    </div>
  );
}
