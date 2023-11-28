import Carrinho from '@/app/assets/icon_carrinho.svg'
import Image from 'next/image';

const Cart = () => {
    return(
    <button className='h-9 w-9'>
       <Image src={Carrinho} alt="Carrinho"/>
    </button>
)
}

export { Cart };