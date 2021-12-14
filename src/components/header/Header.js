import React from 'react'
import SimpleSlider from '../slider/slider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { NavLink } from "react-router-dom"


import './header.scss';

const Header = ({ onOpenBasket, onEntreFormOpen }) => {
    
    return (
        <>
        <div className='header'>
            <div className="header__wrap">
                <div className="menu">
                    <div className="menu__wrap">
                        <ul className="nav">
                            <li className="shop"><NavLink to='/'>Магазин</NavLink></li>
                            <li className="about"><NavLink to='/About'>О компании</NavLink></li>
                            <li className="delivery"><NavLink to='/Delivery'>Доставка и оплата</NavLink></li>
                            <li className="service"><NavLink to='/Service'>Гарантия и сервис</NavLink></li>
                        </ul>
                        <div className="contact">
                            <div onClick={onOpenBasket} className="basket">
                                <div className="fas fa-shopping-basket">
                                    <FontAwesomeIcon icon={faShoppingBasket} /> 
                                </div>
                                <div className="basket__count">0</div>
                            </div>
                            <div className="contact__frame">
                                <div className="phone">
                                    +38(000) 000-00-00
                                </div>
                                <div className="mail">
                                    example@mail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login__form">
                    <div className="img">   
                    </div>
                    <div className="client">
                        <div className="icon">
                            <div className="far fa-user-circle">
                                <FontAwesomeIcon icon={faUserCircle} />
                            </div>
                        </div>
                        <div className="client__panel">
                            <input onClick={onEntreFormOpen} id="LogInBtn" type="button" className="login" value="Войти"/>
                            <input id="RegBtn" type="button" className="register" value="Регистрация"/>
                        </div>
                    </div>
                </div>
                <div className="shop__navigation">
                    <SimpleSlider/>
                    <div className="burger">
                        <div className="first__frame">
                        <div className="square"></div>
                        <div className="square"></div>
                        </div>
                        <div className="second__frame">
                        <div className="square"></div>
                        <div className="square"></div>
                        </div>
                    </div>
                    <div className="product__list">
                        <div className="product">
                        <p>Сканеры штрих кода</p>
                        </div>
                        <div className="product">
                        <p>Терминали сбора данных</p>
                        </div>
                        <div className="product">
                        <p>Принтеры этикеток</p>
                        </div>
                        <div className="product">
                        <p>Принтеры чеков</p>
                        </div>
                        <div className="product">
                        <p>Финансовое оборудование</p>
                        </div>
                        <div className="product">
                        <p>Расходные материалы</p>
                        </div>
                        <div className="product">
                        <p>Маркировочное оборудование</p>
                        </div>
                        <div className="product">
                        <p>POS оборудование</p>
                        </div>
                        <div className="product">
                        <p>Электронные весы</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;
