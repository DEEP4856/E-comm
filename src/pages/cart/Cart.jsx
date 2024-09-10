



import { useContext, useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { deleteFromCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import {  fireDB } from '../../firebase/FirebaseConfig';

const CartPaper = styled(Paper)(({ theme, darkMode }) => ({
  backgroundColor: darkMode ? 'rgb(32 33 34)' : theme.palette.background.paper,
  color: darkMode ? 'white' : theme.palette.text.primary,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

const CartImage = styled('img')({
  width: '100%',
  borderRadius: '8px',
  objectFit: 'cover',
});

function Cart() {


  
  const context = useContext(myContext);
  const { mode } = context;
  const darkMode = mode === 'dark';
  
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  console.log(cartItems)

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
    // console.log(temp)
  }, [cartItems])

  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmount

  // delete to cart
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
    toast.success('deleted  cart item');
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])


    



   //////////////////////////////////////////////////////////////////////////////////////////////////
  // payment integration method ---------------------------------------------------------------------
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")









  const buyNow = async () => {
    // validation 
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
    const addressInfo = {
      name ,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }
    console.log(addressInfo)





  
    var options = {
      key:   import.meta.env.VITE_APP_KEY,
      key_secret: import.meta.env.VITE_SECRET_KEY,
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        // console.log(response)
        toast.success('Payment Successful')
        const paymentId = response.razorpay_payment_id
        // store in firebase 
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId
        }

        try {
          const orderRef = collection(fireDB, "order")
          addDoc ( orderRef,orderInfo)

        } catch (error) {
          console.log(error)
        }
      },

      theme: {
        color: "#3399cc"
      }


    };
    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay)
  }


/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////









  return (
    <Layout>

      <Box
        sx={{
          backgroundColor: darkMode ? '#282c34' : '#f0f0f0',
          color: darkMode ? 'white' : 'inherit',
          minHeight: '100vh',
          pt: 5,
        }}
      >
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Cart Items
          </Typography>
            
        <Grid container spacing={4} justifyContent="center" >
         {/* Iterate over cart items and destructure */}
         {cartItems.map((item, index) => {
              // const { title, description, price, imageUrl } = item; // Destructuring

              return (




            
            <Grid item xs={12} md={8} key={index}  sx={{ mb: 4 }}>
              <CartPaper darkMode={darkMode}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <CartImage src={item.imageUrl} alt="product-image" />
                  </Grid>
                  <Grid item xs={12} sm={8} display="flex" flexDirection="column" justifyContent="space-between">
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {item.description}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        ₹{item.price}
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                      <IconButton >
                        <Button sx={{ color: 'red' }} onClick={() => deleteCart(item)}>

                          <DeleteIcon />
                        </Button>
                      </IconButton>

                    </Box>
                  </Grid>
                </Grid>
              </CartPaper> 
            </Grid>
 );
})}
            
           
         
            
            <Grid item xs={12} md={4} mb={4}>
                <CartPaper darkMode={darkMode}>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography>Subtotal</Typography>
                    <Typography>₹{totalAmount}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography>Shipping</Typography>
                    <Typography>₹{shipping}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={4}>
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h6">₹{grandTotal}</Typography>
                  </Box>

                  {/* click to open modal */}

                  <Modal name={name} address={address} pincode={pincode} phoneNumber={phoneNumber} setName={setName} setAddress={setAddress} setPincode={setPincode} setPhoneNumber={setPhoneNumber} buyNow={buyNow} />

                  {/* click to open modal */}

                </CartPaper>

              </Grid>
            

            </Grid>
         

          
           </Container>
          
       
        
      </Box>
       
    </Layout>
    
  );
}

export default Cart;
