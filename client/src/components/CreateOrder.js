import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography, Stack, Grid, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { add } from '../redux/orderSlice';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FormControl, FormLabel } from '@mui/material';
const CreateOrder = () => {
    const dispatch = useDispatch();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const { bookItem } = useSelector((state) => state.book)
    console.log(bookItem)
    let isLogin = useSelector((state) => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        checkin: "",
        checkout: "",
        adult: "",
        children: "",
        days: ""

    });


    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        console.log(inputs);
    };


    const confirmBooking = (item) => {
        let final = { ...inputs, ...bookItem }
        console.log("final")
        console.log(final)
        dispatch(add(final))
        if (isLogin) {
            navigate('/payment')
        }
        else {
            navigate('/login')
        }

    }

    return (
        <>
            <Box container sx={{ flexGrow: 1, mx: 8 }} >
                <Grid container spacing={2} mt={2}>

                    <Grid item xs={12} sm={6} lg={4} md={6}  >
                        <Card >
                            <CardMedia
                                sx={{ height: 323 }}
                                image={bookItem[0].img}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h4" color="darkblue">
                                    {bookItem[0].hotelname}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h6" color="blue">
                                    Property Type - {bookItem[0].property}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h6" color="blue">
                                    Price/Day -  Rs.{bookItem[0].price}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h6" color="blue">
                                    Board Basis - {bookItem[0].board}
                                </Typography>


                            </CardContent>

                        </Card>
                        {/* </Item> */}
                    </Grid>
                    <Grid item xs={12} sm={6} lg={7} md={6} >
                        <Item>
                            <form onSubmit={() => confirmBooking()} >
                                <Typography className="heading-color" variant="h4" fontWeight='bold'>ENTER DETAILS</Typography>


                                <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ marginBottom: 2 }}>
                                    <FormControl>
                                        <FormLabel>CHECK-IN</FormLabel>
                                        <TextField
                                            sx={{
                                                width: { sm: 200, md: 380 },
                                            }}
                                            required
                                            name="checkin"
                                            value={inputs.checkin}
                                            onChange={handleChange}
                                            variant="outlined"
                                            color="secondary"
                                            type="date"
                                            fullWidth

                                        />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>CHECK-OUT</FormLabel>
                                        <TextField
                                            sx={{
                                                width: { sm: 200, md: 380 }, mb: 2
                                            }}
                                            required
                                            name="checkout"
                                            value={inputs.checkout}
                                            onChange={handleChange}
                                            variant="outlined"
                                            color="secondary"
                                            type="date"
                                            fullWidth
                                        />
                                    </FormControl>
                                </Stack>

                                <FormLabel>ADULT</FormLabel>
                                <TextField

                                    label="ADULT"
                                    name="adult"

                                    value={inputs.adult}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    color="secondary"
                                    type="number"
                                    sx={{ mb: 3 }}
                                    fullWidth

                                />

                                <FormLabel>CHILDREN</FormLabel>
                                <TextField
                                    label="CHILDREN"
                                    name="children"
                                    value={inputs.children}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    color="secondary"
                                    type="number"
                                    sx={{ mb: 3 }}
                                    fullWidth
                                />


                                <FormLabel>NUMBER OF DAYS</FormLabel>
                                <TextField
                                    label="DAYS"
                                    name="days"
                                    value={inputs.days}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    color="secondary"
                                    type="number"
                                    sx={{ mb: 3 }}
                                    fullWidth
                                />

                                <br />

                                <Box
                                    m={1}
                                    display="flex"
                                    justifyContent="flex-end"
                                    alignItems="flex-end"
                                >

                                    <Button variant="contained" color="primary" sx={{ height: 40, marginLeft: 2 }} type="submit"  >
                                        SUBMIT
                                    </Button>
                                </Box>
                            </form>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
};

export default CreateOrder;