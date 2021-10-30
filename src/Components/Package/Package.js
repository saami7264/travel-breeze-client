import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = ({ pkg }) => {

    const { _id, name, price, details, img } = pkg;

    const url = ``

    return (
        <div className="my-5 p-5 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 g-5">
            <img className="img-fluid img border rounded" src={img} alt="" />
            <h3 className='text'>{name}</h3>
            <h5 className='text'>Price: ${price}</h5>
            <p className='text-dark'>{details}</p>
            <Link to={`/packages/${_id}`}><button className='btn'>Book Now</button></Link >
        </div >
    );
};

export default Package;