import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue, red, yellow } from "@mui/material/colors";
import { Grid, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function OrderCard({
    hotelname,
    checkin,
    checkout,
    username,
    adult,
    children,
    days,
    img,
    total,
    time,
    id,
    isUser,
}) {
    return (
        <Card style={{ backgroundColor: 'darkblue' }}
            sx={{

                width: "59%",
                margin: "auto",
                mt: 2,
                padding: 2,
                boxShadow: "5px 5px 10px #ccc",
                ":hover:": {
                    boxShadow: "10px 10px 20px #ccc",
                },
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <CardMedia component="img" height="100%" image={img} alt="Paella dish" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <CardContent>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>

                                <Typography variant="h5" color="white">
                                    Name : {hotelname}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="p" color="white">
                                    Time : {time}
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography variant="p" color="white">
                                    Check-In : {checkin}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="p" color="white">
                                    CheckOut : {checkout}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="p" color="white">
                                    Adult : {adult}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="p" color="white">
                                    Children : {children}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="p" color="white">
                                    Days : {days}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="p" color="white">
                                    Total : Rs. {total}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
}