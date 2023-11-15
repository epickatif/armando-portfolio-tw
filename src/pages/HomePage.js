import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import myImage from '../assets/homepage-picture.jpg';

function HomePage() {
  const theme = useTheme();

  // Define a common button style
  const commonButtonStyle = {
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    padding: '10px 20px',
    margin: '0px', // Ensuring uniform margins
    minWidth: '150px', // Ensuring a consistent width
    height: '40px', // Ensuring a consistent height
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3, backgroundColor: theme.palette.bright1.main }}>
      <Grid container spacing={2}>
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
          Welcome to  my Technical Writing portfolio
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Hello! I'm Armando Salazar. I am an experienced Technical Writer with a six-year background in creating software documentation and guiding product strategy. I excel in making complicated tech ideas accessible to all audiences and am dedicated to enhancing product ease of use.
          </Typography>
          <Typography paragraph>
            More detailed information can go here - discuss your skills, experience, or what you're passionate about.
          </Typography>
          {/* Button to view projects */}
          <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/projects"
            sx={{ ...commonButtonStyle, marginRight: 2 }} // Apply common style with additional right margin
          >
            View Projects
          </Button>
          {/* Button to view resume */}
          <Button 
            variant="outlined" 
            color="primary" 
            href="your-resume-link" 
            target="_blank"
            sx={{ ...commonButtonStyle, border: '1px solid' }} // Add border for outlined button
          >
            View My Resume
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
          <img 
            src={myImage}
            alt="Portrait" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
