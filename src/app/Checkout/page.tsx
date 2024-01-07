'use client'
import { useCartStore } from "@/app/store/store";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const Checkout = () => {
    const useStore = useCartStore();
    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0);

    


    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')

    const formIsValid = name && email && telefone

    const infoClient = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'telefone') {
            setTelefone(value);
        }
    };

    const isCartEmpty = useStore.cart.length === 0;
    const handlePayment = async () => {
        if (!isCartEmpty) {
            const itemsPurchased = useStore.cart.map((item) => `${item.title} - Quantidade: ${item.quantity} `).join('\n');
            alert(`Itens Comprados:\n${itemsPurchased}  \n\nTotal da compra: ${totalPrice}`);


            const getInfoItems = useStore.cart.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
            }))

            const date = new Date()
    
            const order = {
                buyer: {name, email, telefone},
                 getInfoItems,
                totalPrice: totalPrice,
                date

                // Outros campos da ordem, se necessário.
                // timestamp: serverTimestamp() // Exemplo de registro do tempo da ordem.
            }; 

            console.log(order)

             try {
                const db = getFirestore();
                const ordersCollection = collection(db, 'orders');
                await addDoc(ordersCollection, order);

                // Após criar a ordem com sucesso, limpe o carrinho.
                
            } catch (error) {
                console.error('Erro ao criar a ordem:', error);
            } 
            useStore.clearCart();
        }
    };
    
    


    return (
        <>
        <section className="">
            <h1 className="text-center text-orange-600 text-2xl font-bold">Resumo do Carrinho de compras </h1>
            <div className="border-t boder-gray-600 my-4"></div>
            {isCartEmpty ? (
                <p className="text-center text-orange-600 text-xl font-bold m-80">Não há produtos no carrinho, volte para pagina inicial.</p>
            ) : (
                <>
                    {useStore.cart.map((item) => (
                        <motion.div 
                        animate={{scale:1, rotateZ:0, opacity:1}}
                        initial={{scale:0.5, rotateZ:-10, opacity:0}}
                        exit={{scale:0.5, rotateZ:-10, opacity:0}}
                        key={item.id} 
                        className="flex justify-center gap-4 py-4 border-solid border-2 rounded-md border-gray-600 m-10  w-auto">
                            
                            <Image src={item.image!} alt={item.title!} width={200} height={200} className="object-cover w-24" />
                            <div className="flex justify-around gap-40 items-center text-center">
                                <h2 className=" text-orange-600 text-sm font-bold">{item.title}</h2>
                                <h2 className="text-black text-sm font-bold">Quantidade: {item.quantity}</h2>
                                <p className="text-orange-600 text-sm font-bold">Preço: {item.price}</p>
                                <p className="text-orange-600 text-sm font-bold">stock: {item.stock}</p>
                                <div className="flex">
                                <button
                                    className="text-white py-1 px-2 border bg-orange-600 rounded-md mt-2 text-sm mr-1"
                                    onClick={() => useStore.addProduct(item)}>
                                    Adicionar
                                </button>
                                <button
                                    onClick={() => useStore.removeCart(item)}
                                    className="text-white py-1 px-2 border bg-orange-600 rounded-md mt-2 text-sm">
                                    Remover
                                </button>
                                </div>
                            </div>
                                
                            
                        </motion.div>
                    ))}
                    <div className=" items-center ml-8 border-solid border-2 rounded-md border-gray-600 m-12">
                        <h2 className="text-orange-600 text-center text-xl font-bold my-5">Dados do Cliente</h2>
                        <div className="flex flex-row justify-center gap-10 my-2">
                            <input 
                                className="border-solid border-2 rouded-md border-gray-600 rounded-md h-11 text-center"
                                type="text" name="name" value={name} placeholder="Nome completo" required onChange={infoClient}>
                            </input>

                            <input 
                                className="border-solid border-2 rouded-md border-gray-600 rounded-md h-11 text-center"
                                type="text" name="email" value={email} placeholder="Digite seu e-mail" required onChange={infoClient}>
                            </input>

                            <input 
                                className="border-solid border-2 rouded-md border-gray-600 rounded-md h-11 text-center"
                                type="text" name="telefone" value={telefone} placeholder="Telefone" required onChange={infoClient}>
                            </input>
                        </div>
                    </div>

                    {/* Renderizar o total apenas se o carrinho não estiver vazio */}
                    {!isCartEmpty && (
                        <div className=" gap-4 py-4 m-14">
                            <p className=" text-center text-orange-600 text-2xl font-bold m-10">Total: {totalPrice}</p>
                            <div className="flex justify-center">
                                <button
                                disabled = { !formIsValid }
                                onClick={handlePayment} // Chama a função ao clicar no botão
                                className="items-center text-white py-1 px-2 border bg-orange-600 rounded-md mt-2 text-lg mr-1 m-10">
                                    Efetuar pagamento
                                </button>
                            </div>
                        </div> 
                        
                    )}
                    
                </>
            )}
        </section>
        </>
    );
}

export default Checkout;