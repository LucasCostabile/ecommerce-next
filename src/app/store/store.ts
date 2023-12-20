import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Idetail } from "../components/interfaces/detail.interface";


type CartState = {
    cart: Idetail[];
    itemDetails: Idetail[];
    addProduct: (product: Idetail) => void;
    removeCart: (product: Idetail) => void;
    setItemDetails: (items: Idetail[]) => void;
    isOpen: boolean;
    toggleCart: () => void;
};

export const useCartStore = create<CartState>()(
    
    persist((set) => ({
        cart: [],
        itemDetails: [],
        addProduct: (item) =>
            set((state) => {
                const product = state.cart.find((p) => p.id === item.id);

                if (product) {
                    const updatedCart = state.cart.map((p) => {
                        if (p.id === item.id) {
                            return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 };
                        }
                        return p;
                    });
                    return {cart: updatedCart};
                } else {
                    return { cart: [...state.cart, { ...item, quantity: 1 }] }
                }
            }),
            removeCart: (item) =>
            set((state) => {
                const existingProduct = state.cart.find((p) => p.id === item.id);

                if(existingProduct && existingProduct.quantity! > 1) {
                    const updatedCart = state.cart.map((p) => {
                        if (p.id === item.id){
                            return {...p, quantity: p.quantity! -1};
                        }
                        return p;
                    })
                    return{ cart: updatedCart};
                }else {
                    const filterCart = state.cart.filter((p) => p.id !== item.id);
                    return { cart: filterCart}
                }

            
            }),
            setItemDetails: (items) => set({ itemDetails: items }),
        isOpen: false,
                    toggleCart: () => set((state) => ({ isOpen: !state.isOpen }))
    }), { name: 'cart-storage' })
    );