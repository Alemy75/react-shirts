import CrossIco from "../../assets/svg/cross.svg";

const HeaderPopup = (props) => {
    return (
        <div className="popup">
            <div className="popup__wrap">
                <h3>Навигация по сайту</h3>
                <ul className="popup__nav">
                    <li className="popup__item">Главная</li>
                    <li className="popup__item">Акции</li>
                    <li className="popup__item">О компании</li>
                    <li className="popup__item">Отзывы</li>
                    <li className="popup__item">Доставка и оплата</li>
                    <li className="popup__item">Контакты</li>
                </ul>
            </div>
            <button onClick={props.onClose} className="popup__close">
                <img src={CrossIco} alt=""/>
            </button>
        </div>
    );
};

export default HeaderPopup;