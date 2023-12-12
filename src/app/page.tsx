//import Image from 'next/image'
import { ItemListContainer } from "./components/ItemsContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext";



export default function Home() {
  return (
    <>
    <CartProvider>
      <ItemListContainer greeting="Bem-vindo ao nosso catálogo"/>
    </CartProvider>
    </>
  )
}