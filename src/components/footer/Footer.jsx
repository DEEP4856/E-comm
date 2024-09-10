import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#2c2c2c', color: 'white', py: 5, mt: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We are committed to providing the best services to our customers. Our mission is to make
                            your life easier with our high-quality products.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>
                                <Link to="/AllProduct" style={{ color: 'inherit', textDecoration: 'none' }}>
                                  All Produts
                                </Link>
                            </li>
                            <li>
                                <Link to="/Order" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Order
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">Email: info@example.com</Typography>
                        <Typography variant="body2">Phone: +1 234 567 890</Typography>
                        <Typography variant="body2">Address: 123 Main St, City, Country</Typography>
                    </Grid>
                </Grid>
                <Box sx={{ textAlign: 'center', pt: 4 }}>
                    <Typography variant="body2" color="#fff">
                        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
