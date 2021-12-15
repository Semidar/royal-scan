import React from 'react'

const Delivery = () => {
    return (
        <>
        <div className="content__to__show">
            <div className="content__wrap">
                <div className="delivery">
                    <div className="title">
                        Доставка и оплата
                    </div>
                    <div className="delivery__wrap">
                        <div className="payment">
                            <div className="subtitle">
                                ОПЛАТА
                            </div>
                            <div className="name">
                                Наличный расчет:
                            </div>
                            <ul className="text">
                                <li>При доставке заказа курьером;</li>
                                <li>Самовывоз заказа из офиса;</li>
                                <li>Наложенный платеж – оплата производится в момент получения заказа на складе перевозчика «Нова Пошта»;</li>
                            </ul>
                            <div className="name">
                                Онлайн:
                            </div>
                            <ul className="text">
                                <li>Приват24;</li>
                                <li>Интернет-банкинг;</li>
                                <li>Картой Visa/MasterCard у нас на сайте.</li>
                            </ul>
                            <div className="name">
                                Безналичный расчет:
                            </div>
                            <div className="text">
                                Для юридических лиц оплата производится согласно выставленного счет-фактуры. Счет высылается на Ваш e-mail. Товар отгружается после зачисления денежных средств на наш расчетный счет. Для постоянных клиентов товар может отгружаться до зачисления денежных средств.
                            </div>
                        </div>
                        <div className="our__delivery">
                            <div className="subtitle">
                                ДОСТАВКА
                            </div>
                            <div className="name">
                                Доставка курьером по Киеву:
                            </div>
                            <ul className="text">
                                <li>
                                    При заказе на сумму от 2 000 грн доставка осуществляется бесплатно;
                                </li>
                                <li>
                                    При заказе на сумму до 2 000 грн стоимость доставки – 70 грн*;
                                </li>
                                <li>
                                    Если заказ оформлен и подтвержден с 9:00 – 12:00 он будет доставлен текущим днем;
                                </li>
                                <li>
                                    Если заказ оформлен и подтвержден с 12:00 - 18:00 текущего дня он будет доставлен на следующий день;
                                </li>
                                <li>
                                    Доставка в выходные по предварительной договоренности.
                                </li>
                            </ul>
                            <div className="name">
                                Доставка по Украине курьерской службой "Нова пошта":
                            </div>
                            <ul className="text">
                                <li>
                                    При заказе на сумму от 3 000 грн доставка осуществляется бесплатно;
                                </li>
                                <li>
                                    При заказе на сумму до 3 000 грн стоимость доставки – согласно тарифов перевозчика*.
                                </li>
                                <div className="text">
                                    * Стоимость доставки для постоянных клиентов согласовывается индивидуально.
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="delivey__img"></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Delivery;
