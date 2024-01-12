import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
const UserOrder = () => {
  const [orders, setOrders] = useState([]);

  const getUserOrder = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`http://localhost:8040/api/v1/order/user-order/${id}`);
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
        <h1>You Haven't Booked a Hotel</h1>
      )}
    </div>
  );
};

export default UserOrder;