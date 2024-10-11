import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#008080', // Teal color for the footer background
        color: 'white',
        py: 3, // Padding top and bottom
        mt: 'auto',
        textAlign: 'center', // Center align text
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h6">
              Company
            </Typography>
            <Typography variant="body2">
              Address: 123 Main St, City, Country
            </Typography>
            <Typography variant="body2">Phone: (123) 456-7890</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h6">
              Quick Links
            </Typography>
            <Typography variant="body2">Products</Typography>
            <Typography variant="body2">Pricing</Typography>
            <Typography variant="body2">Blog</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h6">
              Follow Us
            </Typography>
            <Typography variant="body2">Facebook</Typography>
            <Typography variant="body2">Twitter</Typography>
            <Typography variant="body2">Instagram</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 3 }}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
