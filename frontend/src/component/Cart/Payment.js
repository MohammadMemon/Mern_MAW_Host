import React, { Fragment, useEffect} from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import axios from "axios";
import "./payment.css";
import {createOrder,clearErrors} from "../../actions/orderAction"



const Payment = ({ history }) => {

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error} = useSelector((state) => state.newOrder);

  const num = shippingInfo.phoneNo  
  const phoneNumber = 91+ num

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
      const script = document.createElement('script');

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [dispatch, error, alert]);

  const KEY_ID = "rzp_test_rP6aZGu0McWleL" 

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    totalOldPrice: orderInfo.totalOldPrice,
    discount: orderInfo.discount,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };
  const handlePayment = async (e) => {
      e.preventDefault();
      try {
          const orderUrl = "https://www.myartworld.in/api/payment/orders";
          const { data } = await axios.post(orderUrl,  {amount: orderInfo.totalPrice});
          
          console.log(data);  
          initPayment(data.data);
      } catch (error) {
          alert.error("There's some issue while processing payment ");
      }
  };
  const initPayment = (data) => {
   
    const options = {
        key: KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Paying to Myartworld",
        description: `Paying to Myartworld ₹${orderInfo && orderInfo.totalPrice}`,
        order_id: data.id,
        handler: async (response) => {
          alert.success(response.razorpay_payment_id);
          alert.success(response.razorpay_order_id);
          alert.success(response.razorpay_signature)
          const pay = response.razorpay_payment_id
          sessionStorage.setItem("orderID", JSON.stringify(pay))
            try {
                const verifyUrl = "https://www.myartworld.in/api/payment/verify";
                const { data } = await axios.post(verifyUrl, response);
                console.log(data);

                order.paymentInfo ={
                  id: response.razorpay_payment_id,
                  status: "succeeded",
                }
                dispatch(createOrder(order));
                
                console.log( order.paymentInfo)
                history.push("/success");
            } catch (error) {
                console.log(error);
                history.push("/cart");
            }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: phoneNumber,
        },
        notify: {
          sms: true,
          email: true,
        },
        theme: {
            color: "#ff6347",
        },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
};
        
  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => handlePayment(e)}>
          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;