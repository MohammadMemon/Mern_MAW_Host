import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

window.onunload = function () {
	sessionStorage.removeItem('orderID');
}

const OrderSuccess = () => {

  const paymentInfo = JSON.parse(sessionStorage.getItem("orderID"));

  return (
    <div className="orderSuccess">
      <CheckCircleIcon />
      <Typography>Your Order has been Placed successfully </Typography>
      <h3>Your Payment Id: {paymentInfo} .</h3>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;