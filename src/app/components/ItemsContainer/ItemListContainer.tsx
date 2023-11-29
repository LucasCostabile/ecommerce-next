'use client'
import React from 'react';
import { ItemList } from '../Item/ItemList';


interface ItemListContainerProps {
  greeting: string;
}


const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {

  return (
    <section className='text-center'>
      <h2 className='m-5'>{greeting}</h2>
      <section>
      <ItemList />
      </section>
    </section>
  );
};

export { ItemListContainer } 