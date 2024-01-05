'use client'
import { useCartStore } from "@/app/store/store"
import Image from "next/image";
import CheckoutButton from "../Button/CheckoutButton";
import { motion } from "framer-motion";


const CartDrawer = () => {
    const useStore = useCartStore();
    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0);

    const isCartEmpty = useStore.cart.length === 0;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={() => useStore.toggleCart()}
            className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50'>

            <div
                onClick={(e) => e.stopPropagation()}
                className='absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-scroll'>
                <button
                    onClick={() => useStore.toggleCart()}
                    className="font-bold text-sm text-orange-600">
                    Voltar para Loja
                </button>
                <div className="border-t boder-gray-600 my-4"></div>
                {isCartEmpty ? (
                    <p className="text-white text-center">Seu carrinho está vazio</p>
                ) : (
                    <>
                        {useStore.cart.map((item) => (
                            <motion.div 
                            animate={{scale:1, rotateZ:0, opacity:1}}
                            initial={{scale:0.5, rotateZ:-10, opacity:0}}
                            exit={{scale:0.5, rotateZ:-10, opacity:0}}
                            key={item.id} 
                            className="flex gap-4 py-4">
                                <Image src={item.image!} alt={item.title!} width={120} height={120} className="object-cover w-24" />

                                <div>
                                    <h2 className="w-42 truncate text-orange-600 text-sm font-bold">{item.title}</h2>
                                    <h2 className="text-white text-sm font-bold">Quantidade: {item.quantity}</h2>
                                    <p className="text-green-500 text-sm font-bold">R$: {item.price}</p>
                                    <button
                                        className="text-white py-1 px-2 border bg-orange-600 rounded-md mt-2 text-sm mr-1"
                                        onClick={() => useStore.addProduct(item)}>
                                        Adicionar
                                    </button>
                                    <button
                                        onClick={() => useStore.removeCart(item)}
                                        className="text-white py-1 px-2 border bg-orange-600 rounded-md mt-2 text-sm" >
                                        Remover
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                        {useStore.cart.length > 0 && (
                            <CheckoutButton totalPrice={totalPrice} />
                        )}
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default CartDrawer;