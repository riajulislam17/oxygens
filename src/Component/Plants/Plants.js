import React from 'react';
import "./Plants.css"

const Plants = (props) => {
    // console.log(props)
    const { name, img, price, location, seller, implantation } = props.plant;
    return (
        <div>
            <div className="card h-100 shadow-lg border-dark rounded bgColor">
                <div className="card-body bg-card text-center">
                    <img className="img-fluid rounded-circle image" src={img} alt="" />
                    <h3>{name}</h3>
                </div>
                <span className="p-3 bg-card">
                    <h6><span className="fw-bold">Seller Name: </span>{seller}</h6>
                    <h6><span className="fw-bold">Category: </span>{implantation} Plantation</h6>
                    <h4><span className="fw-bold">Price: </span>{price} BDT</h4>
                    <h6><span className="fw-bold">Location: </span>{location}</h6> 
                </span>
                <div className="d-flex justify-content-center p-3">
                    <button onClick={() => props.buttonHandle(props.plant)} className="btn fw-bold button"><i class="fas fa-shopping-cart"></i> Add To Plant List</button>
                </div>
            </div>
        </div>
    );
};

export default Plants;