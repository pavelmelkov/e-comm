import React from "react";
import { connect } from "react-redux";
import withRouter from "../HOC/wrapRouter";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, dispatch, router }) => {
    console.log("router ", router);
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}
            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    router.navigate("/checkout");
                    dispatch(toggleCartHidden());
                }}
            >
        GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
};
  
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});
  
export default withRouter(connect(mapStateToProps)(CartDropdown));