import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HYrXKJTwv9il0JPogiimBZKtiOpwSUTyOUYHBWEr6LdD7a20LND3yJsdrkrWVn9cOPfRXEAmrRofAuUVpvuQZr100u6MhQxKl";

    const onToken = token => {
        console.log(token);
        alert("Payment Succesful!");
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            bitcoin
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;