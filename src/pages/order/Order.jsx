import { useContext } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;

  return (
    <Layout>
      <div>
      {loading && <Loader />}
      {order.length > 0 ? (
        <Box pt={10}>
          {order.filter((obj) => obj.userid === userid).map((order) => (
            <Grid container spacing={2} justifyContent="center" key={order.id} sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
              {order.cartItems.map((item) => (
                <Grid item xs={12} md={8} key={item.id}>
                  <Card
                    sx={{
                      display: 'flex',
                      mb: 3,
                      p: 2,
                      bgcolor: mode === 'dark' ? '#282c34' : 'white',
                      color: mode === 'dark' ? 'white' : 'black',
                      boxShadow: 3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.imageUrl}
                      alt="product-image"
                      sx={{ width: { xs: '100%', sm: '150px' }, borderRadius: 1 }}
                    />
                    <CardContent sx={{ ml: { sm: 2 }, flex: 1 }}>
                      <Typography variant="h6" component="div" sx={{ color: mode === 'dark' ? 'white' : 'black' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, color: mode === 'dark' ? 'white' : 'gray' }}>
                        {item.description}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, color: mode === 'dark' ? 'white' : 'gray' }}>
                        {`Price: $${item.price}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ))}
        </Box>
      ) : (
        <Typography variant="h1" align="center" sx={{ color: 'Black', mt: 4 }}>
          Zero Orders
        </Typography>
      )}
      </div>
    </Layout>
  );
}

export default Order;
