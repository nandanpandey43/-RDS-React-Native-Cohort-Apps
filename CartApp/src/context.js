import {View, Text} from 'react-native';
import React, {Children, createContext} from 'react';

const productDetails = [
  {
    id: 1,
    itemName: 'Shirt',
    price: 129.99,
    totalItems: 0,
  },
  {
    id: 2,
    itemName: 'Shoes',
    price: 199,
    totalItems: 0,
  },
];

const AppContext = createContext();

function ContextProvider({Children}) {
  const value = {
    productDetails,
  };
  return <AppContext.Provider value={value}>{Children}</AppContext.Provider>;
}

export {ContextProvider, AppContext};
