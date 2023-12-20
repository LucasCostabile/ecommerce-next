'use client'
import Carrinho from '@/app/assets/icon_carrinho.svg'
import { useCartStore } from '@/app/store/store';
import Image from 'next/image';
import CartDrawer from '../Cart/CartDrawer';

const Cart = () => {
    const useStore = useCartStore();

    return (
        <>
            <div
                onClick={() => useStore.toggleCart()}
                className='relative'>
                <button className='h-9 w-8'>
                    <Image src={Carrinho} alt="Carrinho" />
                </button>

                <span className='bg-orange-500 text-sm text-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-8 bottom-8'>
                    {useStore.cart?.length}
                </span>
            </div>
            {
                !useStore.isOpen && (<CartDrawer />)}
        </>
    )
}

export { Cart }; 