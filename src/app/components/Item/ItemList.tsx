// ItemList.tsx
import React, { useState, useEffect } from 'react';
import  Item  from './Item';
import  Loading  from '../Loading';
import { Idetail } from '../interfaces/detail.interface';
import { useCartStore } from '@/app/store/store';
import { APP_FIREBASE } from "@/app/config/firebase/firebase.config";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Listrepo, setListRepo] = useState<Idetail[]>([]);
  
  const cartStore = useCartStore();


/*   const getListRepo = (): Promise<Idetail[]> => {
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
            title: 'Kit Upgrade Ryzen 7',
            price: 9,
            image: Item2
          }, 
          {
            id: 3,
            description: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4060',
            title: 'Placa de Vídeo Gigabyte',
            price: 10,
            image: Item3
          },
          {
            id: 4,
            description: 'Placa de Vídeo Gigabyte NVIDIA GeForce RTX 4060',
            title: 'Placa de Vídeo Gigabyte',
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
      }, 2000)

    })
  }


  useEffect(() => {
    
    const onMount = async () => {
      try {
        const resp = await getListRepo();
        // Remova o setListRepo e atualize os detalhes dos itens diretamente no cartStore
        cartStore.setItemDetails(resp);
        console.log('Dados armazenados em cartStore:', resp);
      } catch (error) {
        console.log('Deu ruim', error);
      } finally {
        
      }
    };
    onMount();
  }, []); */

  useEffect(() => {
    const onMount = async () => {
      try {
        const db = getFirestore(APP_FIREBASE);
        const prodRef = collection(db, "items");
        const listaDb = await getDocs(prodRef).then((item) => {
          const lista = item.docs.map((doc) => doc.data());
          return lista;
        });

        console.log(listaDb);
        cartStore.setItemDetails(listaDb);
      } catch (err) {
        console.log("Erro:", err);
      }
    };
    console.log(ItemDetail);
    onMount();
  }, []);


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 xl:gap-6'>
      <Loading loading={isLoading}  />
      {cartStore.itemDetails.map((item) => (
         <div key={item.id}>
          
          <Item product={item}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList 
