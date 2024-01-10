import React from 'react';
import bannerImage from '../assets/bannerImage.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useCPContext } from '../context/CPContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img1 from '../assets/img1.jpg';

// Define a custom theme with a new font
const customTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function LandingPage() {
  return (
    <ThemeProvider theme={customTheme}>
      <div
        className="LandingPage"
        style={{
          backgroundImage: 'url("paper-plane-chattapat.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={bannerImage} width="100%" alt="banner image" style={{ zIndex: 1, marginBottom: '20px', maxWidth: '1000px' }} />

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            width: '80%',
            maxWidth: '800px',
            zIndex: 2,
          }}
        >
          <Typography variant="h3" gutterBottom>
          Unify, Simplify, Maximize Efficiency and All Solutions!! 📚✨
          </Typography>
          <Typography variant="body1" paragraph>
          Circle Play Vision is to be a source of meaningful and interactive content that not only brings joy and entertainment to our users but also fosters learning, inspires creativity, and connects communities. We believe that every circle we create is an opportunity to bring people together and offer experiences that have a lasting, positive impact on their lives.
          </Typography>
          <br/>
    


          <img src={img1} alt="E-Learning Image 1" style={{ width: '100%', maxWidth: '500px', margin: '0 20px' }} />

          
          <div style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
              🚀 Ready to Click Play on Your Learning Journey?
            </Typography>
            <Typography variant="body1" paragraph>
              Join Circle Play today and experience managable lessons, engaging activities, and a world of knowledge. Let's make learning enjoyable!
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
