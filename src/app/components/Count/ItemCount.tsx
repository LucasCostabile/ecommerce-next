import React, { useState } from 'react';

interface ItemCountProps {
  initial: number;
  stock: number;
  onAdd: (quantity: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [totalStock, setTotalStock] = useState(stock)
  const [cart, setCart] = useState<number>(0);
  

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (stock > 0 && count > 0) {
      onAdd(count);
      setTotalStock((prevStock => prevStock - count))
    }
  };

  const updateCart = (quantity: number) => {
    // Atualiza o estado do carrinho com a quantidade selecionada
    setCart(cart + quantity);
    // Atualiza o estoque disponível
    setTotalStock(totalStock - quantity);
  };

  //console.log("Quantidade selecionada:", count); // Adiciona log da quantidade selecionada
  //console.log("Quantidade no estoque:", totalStock);
  //console.log("Condição de exibição:", stock === 0);
  
  return (
    <div className='flex flex-col  items-center'>
      <h2>quantidade no estoque: {totalStock}</h2>
      <div className=" flex justify-around items-center w-32 h-12  border border-gray-300 rounded-md font-bold">
        <button className=" w-6 h-6 bg-slate-400 rounded-full " onClick={handleDecrement}>-</button>
        <p>{count}</p>
        <button className=" w-6 h-6 bg-slate-400 rounded-full " onClick={handleIncrement} disabled={count >= totalStock ?  true  :  false } >+</button>
      </div>
      <button className=" flex w-32 h-12 border border-gray-300 rounded-md font-semibold tracking-wide" 
      onClick={handleAddToCart}
      disabled={count > totalStock ?  true  :  false }
      >
        Adicionar ao carrinho
      </button>
      <p>Total no carrinho: {cart}</p>
      {totalStock === 0 &&  <p>Desculpe, sem estoque disponível.</p>}
    </div>
  );
};
 
export default ItemCount ;
