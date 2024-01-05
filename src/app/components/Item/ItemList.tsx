// ItemList.tsx
import React, { useState, useEffect } from 'react';
import  Item  from './Item';
import  Loading  from '../Loading';
import { useCartStore } from '@/app/store/store';
import { APP_FIREBASE } from "@/app/config/firebase/firebase.config";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cartStore = useCartStore();

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
