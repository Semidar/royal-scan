import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import './footer.scss';

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="footer__conteiner">
                <div className="footer__row">
                <div className="logo">
                    <div className="img"></div>
                </div>
                <div className="first__col">
                    <div className="footer__title">Социальные сети</div>
                    <div className="footer__inner">
                    <ul className="footer__items">
                        <a className="footer__link" href="https://facebook.com/" data-modal="feedback_modal" rel="nofollow">
                        <i className="footer__item fab fa-facebook fa-2x">
                            <FontAwesomeIcon icon={faFacebook} />
                        </i>
                        </a>
                        <a className="footer__link" href="https://www.instagram.com/" data-modal="feedback_modal" rel="nofollow">
                        <i className="footer__item fab fa-instagram fa-2x">
                            <FontAwesomeIcon icon={faInstagram} />
                        </i>
                        </a>
                        <a className="footer__link" href="https://www.viber.com/" data-modal="feedback_modal" rel="nofollow">
                        <i className="footer__item fab fa-viber fa-2x">
                            <FontAwesomeIcon icon={faViber} />
                        </i>
                        </a>
                        <a className="footer__link" href="https://telegram.org/" data-modal="feedback_modal" rel="nofollow">
                        <i className="footer__item fab fa-telegram fa-2x">
                            <FontAwesomeIcon icon={faTelegram} />
                        </i>
                    </a>
                    </ul>
                    </div>
                </div>
                <div className="second__col">
                    <div className="footer__title">Контакты</div>
                    <div className="footer__inner">
                    <ul className="footer__items">
                        <li className="footer__item">+38(000) 000-00-00</li>
                        <li className="footer__item">info@korol.com.ua</li>
                        <li className="footer__item">
                        {/* <a className="footer__link" href="#" data-modal="feedback_modal" rel="nofollow">Обратная связь</a> */}
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="basement">
                <div className="basement__inner">© 2021, Интернет-магазин торгового оборудования. Все права защищены. </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;
