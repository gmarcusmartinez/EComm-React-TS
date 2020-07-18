import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ICartItem } from 'interfaces';
import { headerBlocks } from './helpers';
import StripeCheckoutBtn from 'components/StripeButton';
import CheckoutItem from 'components/CheckoutItem';
import { selectCartItems, selectCartTotal } from 'store/selectors/cart';

interface CheckoutPageProps {
  cartItems: ICartItem[];
  total: number;
}
const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, total }) => {
  const renderCartItems = () =>
    cartItems.map((c) => <CheckoutItem key={c.id} cartItem={c} />);

  const list = headerBlocks.map((hb, i) => (
    <div key={i} className='header-block'>
      <span>{hb.text}</span>
    </div>
  ));

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>{list}</div>
      {renderCartItems()}
      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <StripeCheckoutBtn price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, {})(CheckoutPage);
