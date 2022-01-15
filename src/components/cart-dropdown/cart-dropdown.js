import React from "react";
import { connect } from "react-redux";
import withRouter from "../HOC/wrapRouter";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, dispatch, router }) => {
    console.log("router ", router);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButton
                onClick={() => {
                    router.navigate("/checkout");
                    dispatch(toggleCartHidden());
                }}
            >
        GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};
  
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});
  
export default withRouter(connect(mapStateToProps)(CartDropdown));