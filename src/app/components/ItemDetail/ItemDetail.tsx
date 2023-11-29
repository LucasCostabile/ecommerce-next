import { ItemCount } from "../Count/ItemCount";
import { Idetail } from "../interfaces/detail.interface";
import Image from "next/image";

const ItemDetail = ({id, title, description, price, image,}: Idetail) => {
  const handleAddToCart = (quantity: number) => {
    console.log(`Adicionar ao carrinho: ${quantity}`);
  };


    return (
      <div className="flex justify-center items-center">
        <div className="items-center justify-center m-11 p-2 ">
          <Image src={image!} alt={title!} height={400} width={400}></Image>
        </div>
        <div className="flex flex-col items-center p-10 gap-6">
          <h1 className="text-center m-10 text-lg font-semibold">Detalhes do produto:</h1>
          <h2 className="text-center">{description}</h2>
          <p className="text-lg">R${price}</p>
          <ItemCount 
          stock={10} // Defina o estoque disponível para o item
          initial={0} // Defina a quantidade inicial desejada
          onAdd={(quantity: number) => handleAddToCart(quantity)} />
          </div>
      </div>
    );
  };

export { ItemDetail };
