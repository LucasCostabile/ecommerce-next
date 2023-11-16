//import Image from 'next/image'
import { Button } from "./components/Button";
import { NavBar } from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Button title='Buscar' />
      <Button title='Enviar' />
    </> 
  )
}
