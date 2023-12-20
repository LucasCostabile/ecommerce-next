// Item.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import  Button  from '../Button';
import Link from 'next/link';
import { Idetail } from '../interfaces/detail.interface';
import AddCart from '@/app/components/Button/AddCart'
import { useRouter } from 'next/navigation';




const Item: React.FC<{ product: Idetail }> = ({ product }) => {

  const { id, title, description, price, image } = product;

  return (
    <div className='flex flex-col shadow-lg h-96 items-center justify-center p-5 g-10'>
        <div className='relative max-h-72 flex-1 '>
          <Image src={image!} alt={title!} width={180} height={180} />
        </div>
        <div className='flex flex-col justify-center items-center font-bold'>
          <h3 className='my-1'>{description}</h3>
          <p className='my-1'>Preço: {price}</p>
          <Link href={`/ContainerDetail/${id}`}>
            <Button   title='Ver detalhes do produto'/>
          </Link>
          <AddCart product={product} />
      </div>
    </div>
  );
};

export default Item ;
