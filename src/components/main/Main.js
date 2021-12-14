import React from 'react';
import { Routes, Route } from "react-router-dom";
import Shop from './shop/Shop';
import About from './about/About';
import Delivery from './delivery/Delivery';
import Service  from './service/Service';
import './main.scss';


const Main = ({setBasketItems}) => {
    
    return (
        <div>
            <Routes>
                <Route path='/' element={<Shop setBasketItems = { setBasketItems }/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Delivery' element={<Delivery/>}/>
                <Route path='/Service' element={<Service/>}/>
            </Routes>
        </div>
    )
}
export default Main;
