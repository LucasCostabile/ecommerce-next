//import Image from 'next/image'
import { ItemListContainer } from "./components/ItemsContainer/ItemListContainer";
import { NavBar } from "./components/navbar";


export default function Home() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo ao nosso catálogo"/>
    </> 
  )
}
