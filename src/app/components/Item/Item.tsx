// Item.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import  Button  from '../Button';
import Link from 'next/link';
import { Idetail } from '../interfaces/detail.interface';
import AddCart from '@/app/components/Button/AddCart'
import { motion } from 'framer-motion';

const Item: React.FC<{ product: Idetail }> = ({ product }) => {

  const { id, title, description, price, image, stock } = product;

  return (
    <motion.div 
    initial={{opacity:0, x: -100}}
    whileInView={{opacity:1, x: 0}}
    exit={{ opacity: 0, x:-100}}
    transition={{duration: 0.5}}
    className='flex flex-col shadow-lg h-96 items-center justify-center p-5 g-10'>

        <div className='relative max-h-72 flex-1 '>
          <Image src={image!} alt={title!} width={180} height={180} />
        </div>
        <div className='flex flex-col justify-center items-center font-bold'>
          <h3 className='my-1 text-orange-800'>{title}</h3>
          <p className='my-1 text-green-500 font-bold'>R$ {price}</p>
          <p>Quantidade em estoque: {stock}</p>
          <Link href={`/ContainerDetail/${id}`} passHref>
            <Button   title='Ver detalhes do produto'/>
          </Link>
          <AddCart product={product} />
      </div>
    </motion.div>
  );
};

export default Item ;
