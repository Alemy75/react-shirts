import CartIco from './assets/svg/cart.svg'
import SearchIco from './assets/svg/search.svg'
import LoginIco from './assets/svg/login.svg'
import ProfileIco from './assets/svg/account.svg'

function App() {

    return (
        <div className="header-wrap">
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <div className="header__text">T-Shirts</div>
                    </div>
                    <ul className="header__nav">
                        <li className="nav__item">ГЛАВНАЯ</li>
                        <li className="nav__item">АКЦИИ</li>
                        <li className="nav__item">О КОМПАНИИ</li>
                        <li className="nav__item">ОТЗЫВЫ</li>
                        <li className="nav__item">ДОСТАВКА И ОПЛАТА</li>
                        <li className="nav__item">КОНТАКТЫ</li>
                    </ul>
                    <div className="header__links">
                        <img src={CartIco} alt=""/>
                        <img src={SearchIco} alt=""/>
                        <img src={LoginIco} alt=""/>
                        <img src={ProfileIco} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
