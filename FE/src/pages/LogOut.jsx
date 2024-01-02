import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function LogOut() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    // Perform authentication logic here
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setLoggedIn(false);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {loggedIn ? (
          // Logout content
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h2" variant="h6">
                Logged out successfully!
              </Typography>
            </Box>
          </Grid>
        ) : (
          // Sign-in content
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            {/* ... (same as the existing SignInSide component) */}
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default LogOut;



    <div>
       <h2>Thank you for playing with Circle Play! 🔄 Logging out? </h2>
       <h4>We hope you had a fantastic experience exploring in our circle. Come back soon for more engaging content and interactive fun. See you next time! 👋🎮</h4>
    </div>
