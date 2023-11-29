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
    <div className='flex flex-col shadow-lg h-96 items-center justify-center p-5 g-10'>
        <div className='relative max-h-72 flex-1 '>
          <Image src={image} alt={title} width={180} height={180} />
        </div>
        <div className='flex flex-col justify-center items-center font-bold'>
          <h3 className='my-1'>{description}</h3>
          <p className='my-1'>Preço: {price}</p>
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
