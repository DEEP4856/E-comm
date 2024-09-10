
import  { useContext, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Badge, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Menu as MenuIcon, ShoppingCart, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { useMediaQuery } from '@mui/material';
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Navbar = () => {
  



  const user = JSON.parse(localStorage.getItem('user'))

  console.log(user)

  const logout = () => {
    localStorage.clear('user');
    toast.success('LogOut successfull');
    setTimeout(()=>{

      window.location.href = "/";
    },1000)



  }

  const cartItems = useSelector((state) => state.cart)



  const context = useContext(myContext)
  const { mode , toggleMode } = context





  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen is mobile-sized
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <div onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/allproducts">
          <ListItemText primary="All Products" />
        </ListItem>
        <ListItem button component={Link} to="/order">
          <ListItemText primary="Order" />
        </ListItem>
        {user?.user?.email ===import.meta.env.VITE_ADMIN_EMAIL ?
        <ListItem button component={Link} to="/dashboard">
       
          <ListItemText primary="Admin" />
        </ListItem> 
           : ""}  
         {user?
            <Button component={Link} to="/logout" color="inherit" onClick={logout}>
              Log Out 
            </Button> : ""} 
      </List>
      <Divider />
    </div>
  );


  




// backgroundColor: "" ? '#333' : '#1976d2'
  return (
    <AppBar position="static" sx={{ backgroundColor: mode === 'dark' ? '#282c34' : '#1976d2' }}> 
      <Toolbar>
        {/* Left Side: Logo and Caption */}
        <IconButton component={Link} to='/' edge="start" color="inherit" aria-label="logo">
          {/* <img src="/path/to/logo.png" alt="Logo" width="40" height="40" /> */}
        </IconButton>
        <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={'/'}>E-Bharat</Link>  
        </Typography>

        {/* Middle: Links */}
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <>
            <Button component={Link} to="/allproducts" color="inherit">
              All Products
            </Button>
            <Button component={Link} to="/Order" color="inherit">
              Order
            </Button>
            {user?.user?.email === import.meta.env.VITE_ADMIN_EMAIL ?
             <Button component={Link} to="/dashboard" color="inherit">
              Admin
            </Button> : "" }
            {user?
            <Button component={Link} to="/logout" color="inherit" onClick={logout}>
              Log Out 
            </Button> : <Button component={Link} to="/signup" color="inherit">
              Sign Up 
            </Button> }  
          </>
        )}

        {/* Right Side: Profile Image, Dark/Light Toggle, Cart */}
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <IconButton color="inherit" onClick={toggleMode}>
        {mode === 'light' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <IconButton component={Link} to="/cart" color="inherit">
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
