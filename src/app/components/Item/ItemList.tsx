// ItemList.tsx
import React, { useState, useEffect } from 'react';
import { Irepo } from '../interfaces/respo.interface';
import { Item } from './Item';
import { Loading } from '../Loading';
import Item1 from '@/app/assets/processador.png';
import Item2 from '@/app/assets/upgrade1260_139552.png'
import Item3 from '@/app/assets/placa-de-video.png'


const ItemList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Listrepo, setListRepo] = useState<Irepo[]>([]);


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
            description: 'descrição produto',
            title: 'nome produto',
            price: 10,
            image: Item3
          },
          {
            id: 4,
            description: 'descrição produto',
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
      }, 3000)

    })
  }

  useEffect(() => {
    setIsLoading(true);
    const onMount = async () => {
      try {
        const resp = await getListRepo();
        setListRepo(resp);
      } catch (error) {
        console.log('Deu ruim', error);
      } finally {
        setIsLoading(false);
      }
    }
    onMount();
  }, [])

  return (
    <div className='flex flex-wrap justify-around items-center'>
      <Loading loading={isLoading} nameScreen='home' />
      {Listrepo.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export { ItemList }
