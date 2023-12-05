'use client'
import React, { useState, useEffect } from 'react';
import { Loading } from '../../components/Loading';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import Item1 from '@/app/assets/processador.png';
import Item2 from '@/app/assets/upgrade1260_139552.png'
import Item3 from '@/app/assets/placa-de-video.png'
import { Idetail } from '../../components/interfaces/detail.interface';

interface Props{
  params: {
    id:number;
  };
}

const ContainerDetail = ({params}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detailRepo, setDetailRepo] = useState<Idetail | null>(null);


  const getItems = (): Promise<Idetail[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            description: 'Processador AMD Ryzen 5 5600X 3.7GHz (4.6GHz Turbo)',
            title: 'Processador AMD Ryzen 5',
            price: 10,
            image: Item1
          },
          {
            id: 2,
            description: 'Kit Upgrade Ryzen 7 5700X + Placa Mãe B550',
            title: 'Kit Upgrade',
            price: 9,
            image: Item2
          }, 
          {
            id: 3,
            description: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4060',
            title: 'Placa de Vídeo',
            price: 10,
            image: Item3
          },{
            id: 4,
            description: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4060',
            title: 'Placa de Vídeo',
            price: 10,
            image: Item3
          },
          {
            id: 5,
            description: 'Processador AMD Ryzen 5 5600X 3.7GHz (4.6GHz Turbo)',
            title: 'Processador AMD Ryzen 5',
            price: 10,
            image: Item1
          },{
            id: 6,
            description: 'Kit Upgrade Ryzen 7 5700X + Placa Mãe B550',
            title: 'Kit Upgrade',
            price: 9,
            image: Item2
          }
        ])
      },1000)
    })
  }

  useEffect(() => {
    const getProductById = async () => {
      setIsLoading(true);
      try {
        const resp = await getItems();
        const productId = resp.find((produto) => produto.id === Number(params.id));
        productId ? setDetailRepo(productId) : console.log('Nenhum produto encontrado com o ID fornecido.'); 
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
          id={detailRepo?.id}
          title={detailRepo?.title}
          description={detailRepo?.description}
          price={detailRepo?.price}
          image={detailRepo?.image}
        />
    </section>
  );
};

export default ContainerDetail;