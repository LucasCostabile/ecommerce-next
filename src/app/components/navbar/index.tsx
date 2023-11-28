import { Cart } from "./CartWidget";

const NavBar = () => {
    return(
        <div className="bg-sky-500 p-5 shadow-lg flex justify-between">
            <h1 className="text-center">Ecommerce</h1>

            <ul className="text-center flex gap-5">
                <li className="ml-6 bg-blue-700 px-4 py-2 text-white rounded-lg hover:opacity-90">
                    Inicio
                </li>
                <li className="ml-6 bg-blue-700 px-4 py-2 text-white rounded-lg hover:opacity-90">
                    Login
                </li>
                <Cart />
            </ul>
        </div>
        
    )
}

export  { NavBar };