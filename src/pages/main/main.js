import React from 'react';
import { Routes, Route } from "react-router-dom";
import Shop from './shop/shop';
import About from './about/about';
import Delivery from './delivery/delivery';
import Service  from './service/service';
import './main.scss';


const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Delivery' element={<Delivery/>}/>
                <Route path='/Service' element={<Service/>}/>
            </Routes>
        </div>
    )
}
export default Main;
