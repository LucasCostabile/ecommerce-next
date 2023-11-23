import React, { useState } from 'react';

interface ItemCountProps {
  initial: number;
  stock: number;
  onAdd: (quantity: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

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
    }
  };

  console.log("Quantidade selecionada:", count); // Adiciona log da quantidade selecionada
  console.log("Quantidade no estoque:", stock);
  console.log("Condição de exibição:", stock === 0);
  return (
    <div>
      <div className=" flex justify-around items-center w-32 h-12  border border-gray-300 rounded-md font-normal">
        <button className=" w-6 h-6 bg-slate-400 rounded-full " onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button className=" w-6 h-6 bg-slate-400 rounded-full " onClick={handleIncrement}>+</button>
      </div>
      <button className=" w-32 h-12 border border-gray-300 rounded-md text-center  font-semibold tracking-wide" onClick={handleAddToCart}>Adicionar ao carrinho</button>
      {stock === 0 && <p>Desculpe, sem estoque disponível.</p>}
    </div>
  );
};

export { ItemCount };

