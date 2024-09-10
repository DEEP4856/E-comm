/* eslint-disable no-unused-vars */


import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Loader from '../../components/loader/Loader';



function Login() {
   
    const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/Signup');
  };




  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   

    const context = useContext(myContext)
    const { loading,setLoading} = context

    const signin = async () => {
      setLoading(true);
      try {
        const result = await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem('user',JSON.stringify(result));
        toast.success('Signin Successfully', {
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        window.location.href='/'
        setLoading(false);
      } catch (error) {
        toast.error('Sigin Failed', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
      }
    }






  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} style={{ padding: '20px', borderRadius: '15px' ,marginTop:"4em" }}>
      {loading && <Loader/>}
        <Box
          sx={{

            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: '15px',
            padding: '20px',
          }}
        >
          <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
            Log In
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
            />
            <TextField
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <Button
              type="button"
              onClick={signin}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Typography variant="body2" color="textSecondary" align="center">
              Don't have an account? <Button color="primary" onClick={handleSignupClick}>
                Signup
              </Button>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
