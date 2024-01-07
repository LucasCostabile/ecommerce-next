'use client'
import { useCartStore } from "@/app/store/store";
import Link from "next/link";


type CheckoutProps = {

    totalPrice: number;
};

const CheckoutButton = ({ totalPrice }: CheckoutProps) => {
    const useStore = useCartStore();
    

    return(
        <div>
        <p className="text-white text-lg font-bold"> Total: {totalPrice} </p>
            <button  
            
            onClick={() => useStore.toggleCart()} 
            className="w-full rounded-md bg-orange-600 font-bold text-white py-2 mt-2 ">
            <Link href={`/Checkout`}>Finalizar compra</Link>
            </button>
        </div>
    )
};

export default CheckoutButton;