import { useState } from 'react';
import  Button  from '../Button';
import  ItemCount  from '../Count/ItemCount';
import { Idetail } from '../interfaces/detail.interface';
import Image from 'next/image';

const ItemDetail = ({ id, title, description, price, image }: Idetail) => {
  const [cart, setCart] = useState<number>(0);
  const [stock, setStock] = useState<number>(10); // Defina o estoque inicial

  const handleAddToCart = (quantity: number) => {
    // Atualiza o estado do carrinho com a quantidade selecionada
    setCart(cart + quantity);
    // Atualiza o estoque disponível
    setStock(stock - quantity);
  };


  return (
    <div className="flex justify-center items-center">
      <div className="items-center justify-center m-11 p-2 ">
        <Image src={image!} alt={title!} height={400} width={400}></Image>
      </div>
      <div className="flex flex-col items-center justify-center p-10 gap-6">
        <h1 className="text-center m-10 text-lg font-semibold">Detalhes do produto:</h1>
        <h2 className="text-center">{description}</h2>
        <p className="text-lg">R${price}</p>
        <ItemCount
          stock={stock} // Passa o estoque disponível para o ItemCount
          initial={0} // Defina a quantidade inicial desejada
          onAdd={(quantity: number) => handleAddToCart(quantity)} />
        <div>
          <Button title="Comprar" /> 
        </div>
        <p>Total no carrinho: {cart}</p>
      </div>
    </div>
  );
};

export default ItemDetail ;
