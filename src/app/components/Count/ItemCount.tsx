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

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around items-center w-32 h-12 border border-gray-300 rounded-md font-bold">
        <button className="w-6 h-6 bg-slate-400 rounded-full" onClick={handleDecrement}>
          -
        </button>
        <p>{count}</p>
        <button
          className="w-6 h-6 bg-slate-400 rounded-full"
          onClick={handleIncrement}
          disabled={count >= stock ? true : false}
        >
          +
        </button>
      </div>

      <button
        className="flex w-32 h-12 border border-gray-300 rounded-md font-semibold tracking-wide"
        onClick={handleAddToCart}
        disabled={count > stock ? true : false}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ItemCount;
