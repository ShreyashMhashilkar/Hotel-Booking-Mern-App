// import { useContext } from "react";
// import { MovieContext } from "../context/BookingContext";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom"
import { Grid, Divider } from "@mui/material";
import Swal from 'sweetalert2'
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import axios from "axios";
import { styled } from '@mui/material/styles';
const Payment = () => {
    const navigate = useNavigate();
    const { orderItem } = useSelector((state) => state.order)
    console.log(orderItem[0][0]);
    let isLogin = useSelector((state) => state.isLogin);
    let id = localStorage.getItem("userId");
    let result = orderItem[0][0].price
    console.log(typeof result)
    let total = Number(result) + 160;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    }));
    const handleSubmit = () => {
        Swal.fire({
            title: 'Booking Successful',

            icon: 'success',
            width: '300px'
        });
        setTimeout(navigateTO, 600)

    };

    const handleOrder = async (e) => {
        try {
            const { data } = await axios.post("http://localhost:8040/api/v1/order/create-order", {
                hotelname: orderItem[0][0].hotelname,
                checkin: orderItem[0].checkin,
                checkout: orderItem[0].checkout,
                adult: orderItem[0].adult,
                children: orderItem[0].children,
                days: orderItem[0].days,
                total: total.toString(),
                img: orderItem[0][0].img,
                user: id,
            });
            if (data?.success) {
                Swal.fire({
                    title: 'Booking Successful',

                    icon: 'success',
                    width: '300px'
                });
                setTimeout(navigateTO, 600)
                // toast.success("Hotel successfully booked");
                // navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const navigateTO = () => {
        navigate('/')
        window.location.reload();
    }
    return (

        <>
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                mt={6}
            >

                <Grid item xs={3}>
                    <Card sx={{ width: 400 }} alignItems="center"
                        justify="center">
                        <CardContent>
                            <Typography variant="h4" component="div" align="center" style={{ color: '#1a0699' }} gutterBottom>
                                BOOKING SUMMARY
                            </Typography>
                            <Typography variant="h5" component="h5" align='center' style={{ color: '#7a0896' }}>
                                {orderItem[0][0].hotelname}
                            </Typography>

                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Typography variant="h5" component="h5" color="black">
                                        Checkin :
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="h6" color="blue">
                                        {orderItem[0].checkin}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="h5" component="h5" color="black">
                                        Checkout :
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="h6" color="blue">
                                        {orderItem[0].checkout}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="h5" component="h5" color="black">
                                        Adult :
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="h6" color="blue">
                                        {orderItem[0].adult}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="h5" component="h5" color="black">
                                        Children :
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="h6" color="blue">
                                        {orderItem[0].children}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="h5" component="h5" color="black">
                                        Days :
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="h6" color="blue">
                                        {orderItem[0].days}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="h5" component="h5" color="black">
                                        Booking Charge :
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="h6" color="blue">
                                        Rs. 160
                                    </Typography>
                                </Grid>
                                <Divider />
                                <Grid item xs={8}>
                                    <Typography variant="h5" component="h5" color="black">
                                        Total :
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="h6" color="blue">
                                        {total}
                                    </Typography>
                                </Grid>

                            </Grid>
                            <Box textAlign='center' mt={3}>
                                <Button onClick={() => handleOrder()}
                                    sx={{
                                        color: 'white', backgroundColor: 'red', width: 300, ':hover': {
                                            bgcolor: 'yellow',
                                            color: 'white',
                                        }
                                    }}
                                >CONFIRM BOOKING

                                </Button>
                            </Box>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>

        </>
    )
}

export default Payment;