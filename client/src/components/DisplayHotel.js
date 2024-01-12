import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

const DisplayHotel = ({ item }) => {
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const navigate = useNavigate();
  const bookHotel = (item) => {

    dispatch(add(item))
    if (isLogin) {
      navigate('/create-order')
    }
    else {
      navigate('/login')
    }
  }
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  }));
  return (
    <>


      <Grid container my={2} >

        <Grid item xs={12} md={6} lg={4} >
          <CardMedia
            component="img"
            alt="green iguana"
            height="208"
            image={item.img}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={8} pl={3} className='transparent' >
          {/* <Item> */}
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>

              <Typography variant="h5" color="white">
                Name : {item.hotelname}
              </Typography>
            </Grid>


            <Grid item xs={6}>
              <Typography variant="p" color="white">
                Property Type : {item.property}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="p" color="white">
                Board Basis : {item.board}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="p" color="white">
                Price : {item.price}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="p" color="white">
                Rate type : {item.rate_type}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="p" color="white">
                Rating : {item.rating}
              </Typography>
            </Grid>


          </Grid>

          <Box textAlign='center' mb={1}>
            <Button variant="contained" style={{ backgroundColor: 'gold', color: 'blue' }} onClick={() => bookHotel(item)} >Book</Button>

          </Box>


        </Grid>
      </Grid>

    </>
  )
}

export default DisplayHotel