import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-100 h-50' src={errorImg} alt="" />
            <Link to='/home'><button className='btn-success p-2 m-3 rounded-3 w-25'>Return To Home</button></Link>

        </div>
    );
};

export default NotFound;