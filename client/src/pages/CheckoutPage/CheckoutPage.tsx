import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { headerBlocks } from './helpers';
import { ICartItem } from '../../interfaces';
import { selectCartItems, selectCartTotal } from '../../store/selectors/cart';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

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
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, {})(CheckoutPage);
