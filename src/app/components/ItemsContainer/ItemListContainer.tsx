'use client'
import React from 'react';
import ItemList  from '../Item/ItemList';
import Banner from '../Banner/Banner';



interface ItemListContainerProps {
  greeting: string;
}


const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {

  return (
    <section className='text-center'>
      <h2 className='m-5 text-orange-600 text-xl font-bold'>{greeting}</h2>
      <section>
        <Banner />
        <ItemList />
      </section>
    </section>
  );
};

export default ItemListContainer  