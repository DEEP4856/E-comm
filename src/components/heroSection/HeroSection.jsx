import { Container, Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function HeroSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Box
        sx={{
          backgroundImage: `url("https://t4.ftcdn.net/jpg/07/89/32/03/240_F_789320395_vlSDpjlycsIEMrParSTMd4R570YJes6A.jpg" )`, // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? '250px' : '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            component="div"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: theme.spacing(2),
              borderRadius: theme.spacing(1),
            }}
          >
            Welcome to E-Bharat
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginTop: theme.spacing(2),
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: theme.spacing(1),
              borderRadius: theme.spacing(1),
            }}
          >
            Your one-stop solution for all products
          </Typography>
         
        </Container>
      </Box>
    );
  };

export default HeroSection