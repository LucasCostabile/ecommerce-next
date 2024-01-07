'use client'

import { useCartStore } from "@/app/store/store"
import { Idetail } from "../interfaces/detail.interface"

export default function Product({ product }: { product: Idetail}){
    const  { addProduct } = useCartStore();

    return(
        <div>
            <button 
            onClick={() => addProduct(product)}
            className=" flex justify-center items-center w-40 h-12 border border-gray-300 rounded-md font-semibold tracking-wide bg-orange-600 text-white">
            Adicionar ao carrinho
            </button>
        </div>
    )
}