// Item.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ItemCount } from '../Count/ItemCount';

interface ItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: StaticImageData;
}

const Item: React.FC<ItemProps> = ({ id, title, description, price, image }) => {
  const handleAddToCart = (quantity: number) => {
    console.log(`Adicionar ao carrinho: ${quantity}`);
  };

  return (
    <div className='flex items-center p-20 gap-20'>
      <div className='flex flex-col justify-center items-center'>
        <Image src={image} alt={title} width={180} height={180} />
        <h3>{description}</h3>
        <p>Preço: {price}</p>
       <ItemCount
        stock={10} // Defina o estoque disponível para o item
        initial={0} // Defina a quantidade inicial desejada
        onAdd={(quantity: number) => handleAddToCart(quantity)}
        />
      </div>
    </div>
  );
};

export { Item };
