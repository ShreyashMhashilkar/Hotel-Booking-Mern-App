import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import { Box, Typography, TextField, Button } from "@mui/material";
const UserOrder = () => {
    const [orders, setOrders] = useState([]);

    const getUserOrder = async () => {
        try {
            const id = localStorage.getItem("userId");
            const { data } = await axios.get(`https://hotel-booking-mern-app-backend.onrender.com/api/v1/order/user-order/${id}`);
            console.log(data)
            if (data?.success) {
                setOrders(data?.userOrder.order);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getUserOrder();
    }, []);
    console.log(orders);
    return (
        <div>
            {orders && orders.length > 0 ? (
                orders.map((order) => (
                    <OrderCard
                        id={order._id}
                        isUser={true}
                        hotelname={order.hotelname}
                        checkin={order.checkin}
                        checkout={order.checkout}
                        adult={order.adult}
                        children={order.children}
                        days={order.days}
                        img={order.img}
                        total={order.total}
                        username={order.user.username}
                        time={order.createdAt}
                    />
                ))
            ) : (
                <Typography
                        variant="h4"
                        sx={{ textTransform: "uppercase" }}
                        padding={3}
                        textAlign="center"
                        color="white"
                    >
               You Haven't Booked a Hotel
                            </Typography>
            )}
        </div>
    );
};

export default UserOrder;
