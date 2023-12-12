// Item.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '../Button';
import Link from 'next/link';

interface ItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: StaticImageData;
}

const Item: React.FC<ItemProps> = ({ id, title, description, price, image }) => {
 
  return (
    <div className='flex flex-col shadow-lg h-96 items-center justify-center p-5 g-10'>
        <div className='relative max-h-72 flex-1 '>
          <Image src={image} alt={title} width={180} height={180} />
        </div>
        <div className='flex flex-col justify-center items-center font-bold'>
          <h3 className='my-1'>{description}</h3>
          <p className='my-1'>Preço: {price}</p>
          <Link href={`/ContainerDetail/${id}`}>
            <Button title='Ver detalhes do produto'/>
          </Link>
      </div>
    </div>
  );
};

export { Item };
