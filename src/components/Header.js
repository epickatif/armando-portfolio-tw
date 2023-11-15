import React from 'react';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/as-logo-black.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";

function Header() {
  const theme = useTheme();

  // Style for the social media icon containers
  const socialIconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px', // Adjust size as needed
    height: '40px',
    backgroundColor: 'black', // Background color
    borderRadius: '10px', // Rounded edges
    margin: '0 8px', // Space around the icons
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: theme.palette.bright1.main }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ marginRight: 'auto' }}>
            <img src={logo} alt="Logo" style={{ height: '60px', margin: '15px' }} />
          </Link>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex' }}>
            <Button variant="sizeLarge" component={Link} to="/projects" style={{ color: 'black' }}>Projects</Button>
            <Button variant="sizeLarge" component={Link} to="/services" style={{ color: 'black' }}>Services</Button>
            <Button variant="sizeLarge" component={Link} to="/about" style={{ color: 'black' }}>About</Button>
            <Button variant="sizeLarge" component={Link} to="/contact" style={{ color: 'black' }}>Contact</Button>
          </Box>

          {/* Social Media Icons with Border and Background */}
          <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <Box style={socialIconStyle}>
              <IconButton href="your-linkedin-url" target="_blank">
                <LinkedInIcon style={{ color: '#EDD990' }} />
              </IconButton>
            </Box>
            <Box style={socialIconStyle}>
              <IconButton href="your-instagram-url" target="_blank">
                <InstagramIcon style={{ color: '#EDD990' }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
