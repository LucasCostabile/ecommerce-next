import { useEffect, useState } from 'react'; 
import { Idetail } from '../interfaces/detail.interface';
import Image from 'next/image';
import { useCartStore } from '@/app/store/store';

const ItemDetail = ({ id, title, description, price, image, stock }: Idetail) => {
  const useStore = useCartStore();
  const [currentStock, setCurrentStock] = useState(stock)
  const [addedToCart, setAddedToCart] = useState<number>(0); // Estado local para controlar a quantidade adicionada ao carrinho

  useEffect(() => {
    setCurrentStock(stock)
  }, [stock])
  
  const handleAddToCart = (item: Idetail) => {
    useStore.addProduct(item);
    setAddedToCart(addedToCart + 1); // Atualiza a quantidade adicionada localmente ao clicar em "Adicionar ao Carrinho"
  };

  const handleDecrement = (item: Idetail) => {
    useStore.removeCart(item);
    setAddedToCart(addedToCart - 1); // Atualiza a quantidade adicionada localmente ao clicar em "Adicionar ao Carrinho"
  };

  const quantityInCart = useStore.cart.reduce((acc, item) => {
    if (item.id === id && item.quantity !== undefined) {
      return acc + item.quantity; // Soma a quantidade do item no carrinho, se definida
    }
    return acc;
  }, 0);


  return (
    <section className="flex justify-center items-center">
      <div className="items-center justify-center m-11 p-2 ">
        <Image src={image!} alt={title!} height={500} width={500}></Image>
      </div>
      <div className="flex flex-col items-center justify-center w-96 p-10 mr-1 gap-6 border-solid border-2 rounded-md border-gray-600 bg-gray-700">
        <h1 className=" text-orange-600 text-center m-10 text-lg font-semibold">Detalhes do produto:</h1>
        <h2 className="text-center text-orange-400 font-bold">{description}</h2>
        <p className="text-lg text-green-400 font-bold">R${price}</p>
        <p className=" text-white font-bold">quantidade disponível em estoque: {currentStock}</p>
        
        {/* Exibe a quantidade no carrinho */}
        <p className='text-white font-bold'>Adicionado ao carrinho: {quantityInCart}</p>
        {/* Botões para adicionar/remover do carrinho */}
        <div>
          <button
            className="text-white py-1 px-2 border bg-orange-600 rounded-md mt-2 text-sm mr-1"
            onClick={() => { 
            handleAddToCart({ id, title, description, price, image, stock })
            setCurrentStock(currentStock! - 1)
          }}
          disabled={currentStock! <= 0}
          >
            Adicionar
          </button>
          <button
            className="text-white py-1 px-2 border bg-orange-600 rounded-md mt-2 text-sm mr-1"
            onClick={() => handleDecrement({ id, title, description, price, image, stock })}
          >
            Remover
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
