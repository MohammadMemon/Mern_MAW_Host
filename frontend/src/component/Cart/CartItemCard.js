import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
    if (item.name === "Alphabet Keychain" ) {
        return(
            <div className="CartItemCard">
              <img src={item.image} alt="ssa" />
              <div>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                <span>{`Price: ₹${item.oldPrice}`}</span>
                <span>{`Discounted Price: ₹${item.price}`}</span>
                <span>Alphabet Selected: <strong>{item.alphabet}</strong> </span>
                <p onClick={() => deleteCartItems(item.product)}>Remove</p>
              </div>
            </div>
        )
    }
    if (item.name === "Alphabet Keychain with Name" ) {
      return(
          <div className="CartItemCard Big" >
            <img src={item.image} alt="ssa" />
            <div>
              <Link to={`/product/${item.product}`}>{item.name}</Link>
              <span>{`Price: ₹${item.oldPrice}`}</span>
                <span>{`Discounted Price: ₹${item.price}`}</span>
              <span>Alphabet Selected: <strong>{item.alphabet}</strong> </span>
              <span>Name: <strong>{item.nameOne}</strong> </span>
              <p onClick={() => deleteCartItems(item.product)}>Remove</p>
            </div>
          </div>
      )
  }  
  if (item.name === "Couple Keychain" ) {
    return(
        <div className="CartItemCard Big">
          <img src={item.image} alt="ssa" />
          <div>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
            <span>{`Price: ₹${item.oldPrice}`}</span>
                <span>{`Discounted Price: ₹${item.price}`}</span>
            <span>First Name: <strong>{item.nameOne}</strong> </span>
            <span>Second Name: <strong>{item.nameTwo}</strong> </span>
            <p onClick={() => deleteCartItems(item.product)}>Remove</p>
          </div>
        </div>
    )
    }      

  if (item.name === "Heart Shape Keychain" ) {
    return(
        <div className="CartItemCard">
          <img src={item.image} alt="ssa" />
          <div>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
            <span>{`Price: ₹${item.oldPrice}`}</span>
                <span>{`Discounted Price: ₹${item.price}`}</span>
            <span>Name: <strong>{item.nameOne}</strong> </span>
            <p onClick={() => deleteCartItems(item.product)}>Remove</p>
          </div>
        </div>
    )
}

if (item.name === "Pop-Socket" ) {
  return(
      <div className="CartItemCard">
        <img src={item.image} alt="ssa" />
        <div>
          <Link to={`/product/${item.product}`}>{item.name}</Link>
          <span>{`Price: ₹${item.oldPrice}`}</span>
                <span>{`Discounted Price: ₹${item.price}`}</span>
          <span>Name: <strong>{item.nameOne}</strong> </span>
          <p onClick={() => deleteCartItems(item.product)}>Remove</p>
        </div>
      </div>
  )
}

  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.oldPrice}`}</span>
                <span>{`Discounted Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;