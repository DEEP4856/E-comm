import  { useContext, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import myContext from '../../context/data/myContext';
// import Slider from 'react-slick';
import './productcard.css'; 
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


function ProductCard() {
    const context = useContext(myContext)
    const { mode, product, searchkey,filterType,
        filterPrice } = context;

     const navigate = useNavigate();

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    console.log(cartItems)



    // add to cart
    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
   




  
    return (
        <Box sx={{ padding: '20px',   color:  mode === 'white' ? 'dark' : '' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{color: mode === 'dark' ? 'white' : 'dark' }}>
                Our Latest Collection
            </Typography>
            <Box sx={{ height: '4px', width: '90px', backgroundColor: 'blue', marginBottom: '20px' }}></Box>
            <Grid container spacing={3} sx={{ margin: '0 auto' , color: mode === 'white' ? 'dark' : ''  }}>
                
            {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
                        .filter((obj) => obj.category.toLowerCase().includes(filterType))
                        .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
          const { title, price, description, imageUrl } = item; // Destructuring the product object

          return (
                    
                  
                    
                    <Grid  item xs={12} sm={6} md={3} key={item} sx={{ display: 'flex', justifyContent: 'center' }}>
                         

                        <Card  key={index} sx={{ maxWidth: 300, boxShadow: 3, borderRadius: 3  , color:  mode === 'white' ? 'dark' : ''}}>
                            <CardMedia
                                onClick={()=>    navigate(`/productinfo/${item.id}`)}
                                component="img"
                                height="140"
                                image={imageUrl}
                                alt="product"
                                s
                            />
                            <CardContent>
                                <Typography variant="subtitle1" color="textSecondary" component="div">
                                    E-Bharat
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                  ₹ {price}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                   {description}
                                </Typography>

                                <Button onClick={()=>addCart(item)}
                                    variant="contained" 
                                    color="primary" 
                                    sx={{ marginTop: '10px', width: '100%' }}>
                                    Add To Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
         
                       
                    );
                })}
                  
            </Grid>
        </Box>
    );
}

export default ProductCard;
