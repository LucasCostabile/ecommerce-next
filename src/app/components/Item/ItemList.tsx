// ItemList.tsx
import React, { useState, useEffect } from 'react';
import { Irepo } from '../interfaces/respo.interface';
import { Item } from './Item';
import { Loading } from '../Loading';
import Item1 from '@/app/assets/processador.png';
import Item2 from '@/app/assets/upgrade1260_139552.png'
import Item3 from '@/app/assets/placa-de-video.png'
import { useCartContext } from '@/app/context/CartContext';


const ItemList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //const [Listrepo, setListRepo] = useState<Irepo[]>([]);
  const {detailRepo, setDetailRepo} = useCartContext()


  const getListRepo = (): Promise<Irepo[]> => {
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
            title: 'nome produto',
            price: 9,
            image: Item2
          }, 
          {
            id: 3,
            description: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4060',
            title: 'nome produto',
            price: 10,
            image: Item3
          },
          {
            id: 4,
            description: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4060',
            title: 'nome produto',
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
            title: 'nome produto',
            price: 9,
            image: Item2
          }
        ])
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
        const resp = await getListRepo();
        setDetailRepo(resp);
        console.log(resp)
      } catch (error) {
        console.log('Deu ruim', error);
      } finally {
        setIsLoading(false);
      }
    }
    onMount();
  }, [setDetailRepo])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 xl:gap-6'>
      <Loading loading={isLoading} nameScreen='home' />
      {detailRepo.map((item) => (
         <div key={item.id}>
          
          <Item
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        </div>
      ))}
    </div>
  );
};

export { ItemList }
