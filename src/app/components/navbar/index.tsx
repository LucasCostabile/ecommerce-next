import { Cart } from "./CartWidget";

const NavBar = () => {
    return(
        <div className="bg-gray-700 p-4 shadow-2xl flex justify-between">
            <h1 className="text-center text-slate-200 font-bold ">ClickByte</h1>

            <ul className="text-center flex gap-5">
                <button className="ml-6 bg-slate-500 px-3 py-1 text-white rounded-lg hover:opacity-90">
                    Inicio
                </button>
                <button className="ml-6 bg-slate-500 px-3 py-1 text-white rounded-lg hover:opacity-90">
                    Login
                </button>
                <Cart />
            </ul>
        </div>
        
    )
}
export  { NavBar };