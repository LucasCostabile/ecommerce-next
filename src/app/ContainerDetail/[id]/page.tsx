'use client'
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import ItemDetail from '@/app/components/ItemDetail/ItemDetail';
import { useCartStore } from '@/app/store/store';
import { StaticImageData } from 'next/image';
import { Idetail } from '@/app/components/interfaces/detail.interface';

interface Props {
  params: {
    id: number;
  };
}



const ContainerDetail = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<Idetail | null>(null);
  const cartStore = useCartStore(state => state.itemDetails); // Acessando itemDetails do useCartStore


  const getProductById = async () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        const productId = cartStore.find((produto) => produto.id === Number(params.id));
        productId ? setDetail(productId) : console.log('Nenhum produto encontrado com o ID fornecido.');
        setIsLoading(false);
      }, 2000); // Tempo de atraso de 2 segundos
    } catch (error) {
      console.log('Erro', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductById();
  }, [params.id, cartStore]);

  return (
    <section>
      <Loading loading={isLoading}  />
      
      <ItemDetail
        id={detail?.id}
        title={detail?.title}
        description={detail?.description}
        price={detail?.price}
        image={detail?.image}
      />
    </section>
  );
};

export default ContainerDetail;
