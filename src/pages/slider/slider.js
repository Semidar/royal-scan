import React from 'react';
import Slider from 'react-slick';
import '../slider/slider.scss';

const SimpleSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        draggable: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };
    return (
        <div className="product__name__slider">
            <Slider {...settings}>
                <div>
                    <p>Сканеры штрих кода</p>
                </div>
                <div>
                    <p>Терминали сбора данных</p>
                </div>
                <div>
                    <p>Принтеры этикеток</p>
                </div>
                <div>
                    <p>Принтеры чеков</p>
                </div>
                <div>
                    <p>Финансовое оборудование</p>
                </div>
                <div>
                    <p>Расходные материалы</p>
                </div>
                <div>
                    <p>Маркировочное оборудование</p>
                </div>
                <div>
                    <p>POS оборудование</p>
                </div>
                <div>
                    <p>Электронные весы</p>
                </div>
            </Slider>
        </div>
    )
}
export default SimpleSlider;
