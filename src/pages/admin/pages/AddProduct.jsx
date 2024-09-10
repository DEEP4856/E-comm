
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import myContext from '../../../context/data/myContext';

function AddProduct() {


    const context = useContext(myContext);
    const {products,setProducts,addProduct} = context





    return (
        <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Box sx={{ backgroundColor: '#424242', padding: 4, borderRadius: 2, width: '100%' }}>
                <Typography variant="h5" align="center" color="white" gutterBottom>
                    Add Product
                </Typography>
                <Box component="form" sx={{ mt: 2 }}>
                    <TextField
                       onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                     
                        fullWidth
                        label="Product title"
                        name="title"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            backgroundColor: '#616161',
                            borderRadius: 1,
                            '& .MuiOutlinedInput-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: '#bdbdbd' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#bdbdbd' },
                        }}
                    />
                    <TextField
                       onChange={(e) => setProducts({ ...products, price: e.target.value })} value={products.price}
                        fullWidth
                        label="Product price"
                        name="price"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            backgroundColor: '#616161',
                            borderRadius: 1,
                            '& .MuiOutlinedInput-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: '#bdbdbd' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#bdbdbd' },
                        }}
                    />
                    <TextField
                    onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                        fullWidth
                        label="Product imageUrl"
                        name="imageurl"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            backgroundColor: '#616161',
                            borderRadius: 1,
                            '& .MuiOutlinedInput-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: '#bdbdbd' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#bdbdbd' },
                        }}
                    />
                    <TextField
                    onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                        fullWidth
                        label="Product category"
                        name="category"
                        variant="outlined"
                        margin="normal"
                        sx={{
                            backgroundColor: '#616161',
                            borderRadius: 1,
                            '& .MuiOutlinedInput-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: '#bdbdbd' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#bdbdbd' },
                        }}
                    />
                    <TextField
                     onChange={(e) => setProducts({ ...products, description: e.target.value })}
                        fullWidth
                        label="Product description"
                        name="description"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        sx={{
                            backgroundColor: '#616161',
                            borderRadius: 1,
                            '& .MuiOutlinedInput-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: '#bdbdbd' },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#bdbdbd' },
                        }}
                    />
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                        <Button
                         onClick={addProduct}
                            type="button"
                            variant="contained"
                            color="warning"
                            fullWidth
                            sx={{ fontWeight: 'bold', padding: 2 }}
                        >
                            Add Product
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default AddProduct;
