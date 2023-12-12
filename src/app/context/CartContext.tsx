'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { StaticImageData } from "next/image";


// Definindo os tipos
interface Idetail {
  detailRepo:{
    id: number;
    title: string;
    price: number;
    image: StaticImageData;
    description: string;
}[]
setDetailRepo: (detailRepo: {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
  description: string;
}[]
) => void
}

interface Iprovider{
children: React.ReactNode

}


const objetoDefault = { 
   detailRepo: [],
   setDetailRepo:() => null, 
  }

const cart = createContext<Idetail>(objetoDefault)

const CartProvider = ({children}: Iprovider) => {
  const [detailRepo, setDetailRepo] = useState<Idetail['detailRepo']>([])

  return(
    <cart.Provider 
    value={{detailRepo, setDetailRepo}}>
      {children}
    </cart.Provider>
  )
}

const useCartContext = () => useContext(cart);

export {CartProvider, useCartContext}