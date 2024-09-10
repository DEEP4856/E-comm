

import  { useContext } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { Box, Grid, Typography } from '@mui/material';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
  const context = useContext(myContext);
  const { mode ,product,user,order } = context;

  return (
    <Layout>
      <Box sx={{ mt: 10, mb: 10, px: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                border: '2px solid',
                borderColor: mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : '#d1d5db',
                boxShadow: mode === 'dark' ? '0 0 10px rgba(0, 0, 0, 0.6) inset' : '',
                backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '#f3f4f6',
                color: mode === 'dark' ? 'white' : '#000',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                transition: 'box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <FaUserTie size={50} style={{ color: '#6b46c1', marginBottom: '16px' }} />
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: mode === 'dark' ? 'white' : '#000' }}>
                {product.length}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6b46c1' }}>
                Total Products
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                border: '2px solid',
                borderColor: mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : '#d1d5db',
                boxShadow: mode === 'dark' ? '0 0 10px rgba(0, 0, 0, 0.6) inset' : '',
                backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '#f3f4f6',
                color: mode === 'dark' ? 'white' : '#000',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                transition: 'box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <FaUserTie size={50} style={{ color: '#6b46c1', marginBottom: '16px' }} />
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: mode === 'dark' ? 'white' : '#000' }}>
                {order.length}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6b46c1' }}>
                Total Orders
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div
              style={{
                border: '2px solid',
                borderColor: mode === 'dark' ? 'rgba(0, 0, 0, 0.6)' : '#d1d5db',
                boxShadow: mode === 'dark' ? '0 0 10px rgba(0, 0, 0, 0.6) inset' : '',
                backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '#f3f4f6',
                color: mode === 'dark' ? 'white' : '#000',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                transition: 'box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <FaUserTie size={50} style={{ color: '#6b46c1', marginBottom: '16px' }} />
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: mode === 'dark' ? 'white' : '#000' }}>
               {user.length}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6b46c1' }}>
                Total Users
              </Typography>
            </div>
          </Grid>

          
        </Grid>
      </Box>
        <DashboardTab/>

    </Layout>
  );
}

export default Dashboard;


 