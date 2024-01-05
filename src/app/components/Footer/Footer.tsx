import Image from "next/image";
import relogio from '@/app/assets/relogio.png'
import email from '@/app/assets/envelope.png'
import nubank from '@/app/assets/nubank.svg'
import visa from '@/app/assets/visa.png'
import boleto from '@/app/assets/boleto.png'
import mastercard from '@/app/assets/mastercard.png'
import american from '@/app/assets/american.png'
import pix from '@/app/assets/pix.png'


const Footer = () => {
    return(
        <footer className="">
            <div className="bg-black mt-4">
                <div>
                    <div className="text-white my-4">
                        <div className="flex flex-row items-center">
                            <Image src={relogio} alt="relogio" width={50} height={50} />
                            <p className=" m-3">
                                Atendimento Loja Virtual Segunda a sexta 8h às 12h e das 14h às 18h
                            </p>
                            <Image src={email} alt="relogio" width={50} height={50} />
                            <p className=" m-3">
                            lucastc95@hotmail.com 
                            </p>
                        </div>
                    </div>

                    <div className="text-white">
                        <p>Formas de pagamento</p>
                        <div className="flex flex-row justify-around items-center my-4">
                            <div className="">
                                <Image src={visa} alt="" width={70} height={70}/>
                            </div>
                            <div>
                                <Image src={mastercard} alt="" width={70} height={70}/>
                            </div>
                            <div>
                                <Image src={nubank} alt="" width={70} height={70}/>
                            </div>
                            <div>
                                <Image src={pix} alt="" width={70} height={70}/>
                            </div>
                            <div>
                                <Image src={boleto} alt="" width={70} height={70}/>
                            </div>
                            <div>
                                <Image src={american} alt="" width={70} height={70}/>
                            </div>
                        </div> 
                    </div>

                    <div className=" text-white">
                        <div className="flex justify-between ">
                            <div className="ml-2">
                                <p className=" mb-5 text-red-400 font-bold">
                                    Institucional
                                </p>
                                <ul>
                                    <li>Quem somos</li>
                                    <li>Nossas Lojas</li>
                                    <li>Localização</li>
                                </ul>
                            </div>
                            <div>
                                <p className="mb-5 text-red-400 font-bold">
                                    Dúvidas
                                </p>
                                <ul >
                                    <li>Entregas</li>
                                    <li>Garantia</li>
                                    <li>Como comprar</li>
                                    <li>formas de pagamento</li>
                                </ul>
                                
                            </div>
                            <div className="mr-3">
                                <p className="mb-5 text-red-400 font-bold">
                                    Ajuda
                                </p>
                                <ul>
                                    <li>Sac</li>
                                    <li>Fale conosco</li>
                                    <li>Termos de aceite</li>
                                    <li>Politicas de privacidade</li>
                                </ul>
                                
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;