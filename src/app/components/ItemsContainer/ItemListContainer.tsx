'use client'
import React from 'react';
import { ItemCount } from '../Count/ItemCount';


interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  const handleAddToCart = (quantity: number) => {
    console.log(`Adicionar ao carrinho: ${quantity}`);
  };

  return (
    <div className='p-2'>
      <div className="text-center">
        <h2>{greeting}</h2>
      </div>
      <div>
        <h3 className='h-20'>Detalhes do Item</h3>
        <h4 className='h-10'>Imagem item</h4>
        <ItemCount initial={0} stock={10} onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export { ItemListContainer };