'use client'
import React, { useState, useEffect } from 'react';
import { Loading } from '../../components/Loading';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import Item1 from '@/app/assets/processador.png';
import Item2 from '@/app/assets/upgrade1260_139552.png'
import Item3 from '@/app/assets/placa-de-video.png'
import { Idetail } from '../../components/interfaces/detail.interface';
import { useCartContext } from '@/app/context/CartContext';
import { StaticImageData } from 'next/image';

interface Props {
  params: {
    id: number;
  };
}

interface ItemListProps {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
  description: string;
}

const ContainerDetail = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<ItemListProps | null>(null);
  const { detailRepo, setDetailRepo } = useCartContext()


  const getItems = (): Promise<ItemListProps[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(detailRepo)
        console.log(detailRepo)
      }, 1000)
    })
  }

  useEffect(() => {
    const getProductById = async () => {
      setIsLoading(true);
      try {
        const resp = await getItems();
        console.log(resp)
        const productId = resp.find((produto) => produto.id === Number(params.id));
        
        productId ? setDetailRepo([productId]) : console.log('Nenhum produto encontrado com o ID fornecido.');
      } catch (error) {
        console.log('Erro', error);
      } finally {
        setIsLoading(false);
      }
    };

    getProductById();
  }, [params.id]);


  return (
    <section>
      <Loading loading={isLoading} nameScreen='home' />
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