const NavBar = () => {
    return(
        <div className="bg-sky-500 p-5 shadow-lg flex justify-between">
            <h1 className="text-center">Ecommerce </h1>

            <ul className="text-center flex gap-5">
                <li>
                    Inicio
                </li>
                <li>
                    Login
                </li>
            </ul>
        </div>
        
    )
}

export default NavBar;