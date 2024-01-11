import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import paperPlane from '../assets/paperPlane.png'
import Movement from '../assets/Movement.jpg';
import bannerImage from '../assets/bannerImage.png';

// Define a custom theme with a new font
const customTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={customTheme}>
      <div
        className="LandingPage"
        style={{
          backgroundImage: `url(${paperPlane})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right 1em',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
       
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            width: '80%',
            maxWidth: '800px',
            zIndex: 2,
            margin: '0 20px', // Added margin for small screens
          }}
        >
          <Typography variant="h3" gutterBottom>
          Circle Play! Circle the fun, 
          📀circle the memories!
          📀
          </Typography>
          <img src={Movement} alt="Movement" style={{ width: '100%', maxWidth: '500px', margin: '0 auto 20px' }} />
          <Typography variant="body3" paragraph>
             Unify, Simplify, Maximize Efficiency and All Solutions!! 📚✨<br/>
             Circle Play Vision is to be a source of meaningful and interactive content that not only brings joy and entertainment to our users but also fosters learning, inspires creativity, and connects communities. We believe that every circle we create is an opportunity to bring people together and offer experiences that have a lasting, positive impact on their lives.
          </Typography>
          <br />

          <div style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
              🚀 Ready to Click Play on Your Learning Journey?
            </Typography>
            <Typography variant="body1" paragraph>
              Join Circle Play today and experience manageable lessons, engaging activities, and a world of knowledge. Let's make learning enjoyable!
            </Typography>
            <Button onClick={() => navigate("/login")} variant="contained" color="primary" size="large">
              Start Learning
            </Button>
          </div>
        </div>
        <img src={paperPlane} alt="paperPlane" style={{ width: '100%', maxWidth: '500px', margin: '20px auto 0' }} />
      </div>
    </ThemeProvider>
  );
}
