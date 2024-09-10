
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader';
import myContext from '../../context/data/myContext';

function Signup() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");



  const context = useContext(myContext);
  const { loading, setLoading } = context;


   
  // SIGN-UP MAIN FUCTION FIREBASE CODE WRITTEN


  const signup = async () => {
    setLoading(true);

    if (name === "" || email === "" || password === "") {
        toast.error("All fields are required");
        setLoading(false);
        return;
    }

    try {
        // Attempt to create a user with email and password
        const users = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User creation response:', users);

        const user = {
            name: name,
            uid: users.user.uid,
            email: users.user.email,
            time: Timestamp.now()
        };

        // Add user details to Firestore
        const userRef = collection(fireDB, "users");
        await addDoc(userRef, user);
        console.log('User added to Firestore:', user);

        // Clear form fields and provide success feedback
        setName("");
        setEmail("");
        setPassword("");
       
        toast.success("Signup Successfully");

    } catch (error) {
        // Log detailed error information
        console.error('Error during signup:', error.code, error.message);
        toast.error(`Signup failed: ${error.message}`);
        
    } finally {
        setLoading(false);
    }
}







  return (




    <Container component="main" maxWidth="xs">
      <Paper elevation={6} style={{ padding: '20px', borderRadius: '15px', marginTop:"4em" }}>
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
            Sign Up
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
                value={name}
                onChange={(e)=>setName(e.target.value)}
              
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              variant="outlined"
            />
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
             fullWidth
             variant="contained"
             color="primary"
             sx={{ mt: 3, mb: 2 }}
             onClick={signup}
            >
              Sign Up
            </Button>
            <Typography variant="body2" color="textSecondary" align="center">
              Already have an account?{' '}
              <Button color="primary" onClick={handleLoginClick}>
                Log In
              </Button>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;
