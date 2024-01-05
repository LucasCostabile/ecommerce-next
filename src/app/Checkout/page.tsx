'use client'
import { useCartStore } from "@/app/store/store";
import firebase from "firebase/compat/app";
import Image from "next/image";
import { motion } from "framer-motion";


const Checkout = () => {
    const useStore = useCartStore();
    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0);

    const isCartEmpty = useStore.cart.length === 0;

    const handlePayment = async () => {
        if (!isCartEmpty) {
            const itemsPurchased = useStore.cart.map((item) => `${item.title} - Quantidade: ${item.quantity}`).join('\n');
            alert(`Itens Comprados:\n${itemsPurchased}  \n\nTotal da compra: ${totalPrice}`);
    
            for (const item of useStore.cart) {
                try {
                    const docRef = firebase.firestore().collection('items').doc(String(item.id));
                    const doc = await docRef.get();
                    const stock = doc.data()?.stock || 0;
    
                    if (stock >= item.quantity!) {
                        await docRef.update({
                            stock: stock - item.quantity!
                        });
                    } else {
                        throw new Error(`Quantidade insuficiente em estoque para o item: ${item.title}`);
                    }
                } catch (error) {
                    console.error('Erro ao atualizar o estoque:', error);
                }
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
                        className="flex gap-4 py-4 border-solid border-2 border-gray-600 m-10">
                            
                            <Image src={item.image!} alt={item.title!} width={200} height={200} className="object-cover w-24" />
                            <div>
                                <h2 className="w-42 truncate text-orange-600 text-sm font-bold">{item.title}</h2>
                                <h2 className="text-black text-sm font-bold">Quantidade: {item.quantity}</h2>
                                <p className="text-orange-600 text-sm font-bold">Preço: {item.price}</p>
                                <p className="text-orange-600 text-sm font-bold">stock: {item.stock}</p>
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
                            
                        </motion.div>
                    ))}
                    {/* Renderizar o total apenas se o carrinho não estiver vazio */}
                    {!isCartEmpty && (
                        <div className=" gap-4 py-4 m-14">
                            <p className=" text-center text-orange-600 text-2xl font-bold m-10">Total: {totalPrice}</p>
                            <div className="flex justify-center">
                                <button
                                onClick={handlePayment} // Chama a função ao clicar no botão
                                className="items-center text-white py-1 px-2 border bg-orange-600 rounded-md mt-2 text-lg mr-1 m-10">
                                    efetuar pagamento
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