import SHOP_DATA from '../data/shopData';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

export const shop = (state = INITIAL_STATE, action: any) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
