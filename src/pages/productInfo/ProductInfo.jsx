
import { Box, Container, Grid, Typography, Button, IconButton, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../firebase/FirebaseConfig';

function ProductInfo() {

   
    const context = useContext(myContext)
    const { mode } = context;
    const { loading, setLoading } = context;

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(true)
        }
    }


    useEffect(() => {
        getProductData()

    }, [])

   




    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])






    return (
        <Layout>
            <Container sx={{ py: 8,}} >
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            sx={{
                                width: '100%',
                                borderRadius: 1,
                                objectFit: 'cover',
                            }}
                            alt="ecommerce"
                            src={products.imageUrl}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Typography variant="h3" color="text.secondary" gutterBottom sx={{color: mode === 'dark' ? 'white' : 'dark' }}>
                        {products.title}
                        </Typography>
                        <Typography variant="h4" color="text.primary" gutterBottom sx={{color: mode === 'dark' ? 'white' : 'dark' }}>
                            {products.category}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Rating value={4.5} readOnly />
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 ,color: mode === 'dark' ? 'white' : 'dark'  }}>
                                4 Reviews
                            </Typography>
                        </Box>
                        <Typography variant="body1" color="text.secondary" paragraph sx={{color: mode === 'dark' ? 'white' : 'dark' }}>
                        {products.description}
                        </Typography>
                        <Typography variant="h5" color="text.primary" gutterBottom sx={{color: mode === 'dark' ? 'white' : 'dark' }}>
                        ₹ {products.price}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                            <Button  onClick={()=>addCart(products)} variant="contained" color="primary" sx={{ mr: 2, color: mode === 'dark' ? 'white' : 'dark' }}>
                                Add To Cart
                            </Button>
                           
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default ProductInfo;
