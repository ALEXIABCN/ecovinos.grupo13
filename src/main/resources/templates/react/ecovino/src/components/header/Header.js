import logo from '../../assets/logo.png'

const Header = ()=> {
    return <header className='header'>
        <img src={logo} alt="Logo" className='logo' />
        <nav className='nav'>
            <ul className='list'>
                <li>
                    <a href="#">Carrito de compras</a>
                </li>
                <li>
                    <a href="#">Bodegas</a>
                </li>
                <li>
                    <div>
                        cart
                        <img src="" alt=""/>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
}

export { Header };