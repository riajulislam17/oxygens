import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Plants from '../Plants/Plants';
import "./PlantShop.css"

const PlantShop = () => {
    const [plants, setPlants] = useState([]);
    const [cartItem, setCart] = useState([]);

    useEffect(() => {
        fetch('./plants.json')
        .then(res => res.json())
        .then(data => setPlants(data));
    }, [])
    
    const buttonHandle = plant => {
        const newCart = [...cartItem, plant];
        setCart(newCart);
    }

    return (
        <div className="container  rounded p-3 my-3">
        
        <div className="row">
            <div className="col-md-9 col-lg-9 col-sm-7 items rounded">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            plants.map(plant => <Plants
                                key={plant.id}
                                plant={plant}
                                buttonHandle={buttonHandle}
                            >
                            </Plants>)
                    }     
                </div>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-5 p-2">
                <div className="cart h-auto w-auto p-3 rounded shadow ">
                    <Cart cart={cartItem}></Cart>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PlantShop;