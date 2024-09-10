import  { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box } from '@mui/material';

export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
}

function openModal() {
    setIsOpen(true)
}

  return (
    <>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={openModal}
          fullWidth
        >
          Buy Now
        </Button>
      </Box>

      <Dialog open={isOpen} onClose={closeModal} fullWidth maxWidth="sm">
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off">
            <TextField
             value={name} onChange={(e)=>setName(e.target.value)}
             name="name" id="name"
              fullWidth
              margin="normal"
              label="Enter Full Name"
              variant="outlined"
              required
            />
            <TextField
             value={address} onChange={(e)=>setAddress(e.target.value)}
             name="address" id="address"
              fullWidth
              margin="normal"
              label="Enter Full Address"
              variant="outlined"
              required
            />
            <TextField
              value={pincode} onChange={(e)=>setPincode(e.target.value)} 
               name="pincode" 
               id="pincode"
              fullWidth
              margin="normal"
              label="Enter Pincode"
              variant="outlined"
              required
            />
            <TextField
             value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
              name="mobileNumber"
               id="mobileNumber"
              fullWidth
              margin="normal"
              label="Enter Mobile Number"
              variant="outlined"
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
          type="button"
            onClick={()=>{buyNow(); closeModal()}}
            variant="contained"
            color="secondary"
           
            fullWidth
          >
            Order Now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
