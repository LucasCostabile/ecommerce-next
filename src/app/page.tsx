//import Image from 'next/image'
import  ItemListContainer  from "./components/ItemsContainer/ItemListContainer";


export default function Home() {
  return (
    <>
    <main>
      <ItemListContainer greeting="Bem-vindo ao nosso catálogo"/>
      
    </main>
    </>
  )
}