'use client'
import React, { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';
import { ItemDetail } from '../components/ItemDetail/ItemDetail';
import Item1 from '@/app/assets/processador.png';
import { Idetail } from '../components/interfaces/detail.interface';


const ContainerDetail = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detailRepo, setDetailRepo] = useState<Idetail>();


  const getItems = (): Promise<Idetail> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            id: 1,
            description: 'Processador AMD Ryzen 5 5600X 3.7GHz (4.6GHz Turbo)',
            title: 'Processador AMD Ryzen 5',
            price: 10,
            image: Item1
          }
        )
        // reject({
        //   message: 'Ops, tivemos um erro!'
        // });
      }, 1000)

    })
  }

  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        const resp = await getItems();
        setDetailRepo(resp);
      } catch (error) {
        console.log('Deu ruim', error);
      } finally {
        setIsLoading(false);
      }
    }
    onMount();
  }, [])

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