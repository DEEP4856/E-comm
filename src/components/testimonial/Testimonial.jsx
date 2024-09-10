/* eslint-disable react/no-unescaped-entities */



import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Container, Rating } from '@mui/material';
import { useContext } from 'react';
import Slider from 'react-slick';
import myContext from '../../context/data/myContext';
import './Testimonial.css'; 

function Testimonial() {

    const context = useContext(myContext)
    const { mode } = context

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{  color:  mode === 'dark' ? 'white' : 'dark' , py: 8 }}>
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    What Our Customers Say
                </Typography>
                <Box sx={{ height: '4px', width: '80px', backgroundColor: '#0f58df', margin: '20px auto' }}></Box>

                <Slider {...settings}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <Box key={item} sx={{ p: 2 }}>
                             <Card sx={{ padding: 2, maxWidth: '85%', margin: '0 auto' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Rating name="read-only" value={5} precision={0.5} readOnly />
            
                            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 1 }}>
                                John Doe
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                                Customer
                            </Typography>
                            <Typography align="center" color="textPrimary" variant="body2">
                                The product exceeded my expectations. Great quality and design!
                            </Typography>
                        </CardContent>
                    </Card>
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    );
}

export default Testimonial;
