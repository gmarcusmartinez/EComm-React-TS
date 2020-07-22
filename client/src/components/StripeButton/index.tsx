import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
interface IProps {
  price: number;
}
const StripeCheckoutBtn: React.FC<IProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_gS5sLI0jUBLwF5Eg9OriiUp400yfh1UgOm';
  const onToken = (token: any) =>
    axios({
      url: 'api/payments/',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => alert('Payment successful'))
      .catch((error) => alert(error.message));

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutBtn;
