import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HbiELF0MDmz9GpPw4cmtbDBtvp4GvCo66t0yDPec5MqFI0b8LBNA9YxybwWUoDzVQ0ZHoX8VvJhwf3TWxGpeu4w005nAaywOY';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey= {publishableKey}
        />
    );
};

export default StripeCheckoutButton;