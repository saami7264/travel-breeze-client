import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Chart from '../../Chart/Chart';
import Package from '../Package/Package';
import img from '../../images/4285073.jpg'

const Home = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://frozen-reef-63727.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className='my-5'>
            <h2 className='text'>Our Packages</h2>
            <div className="row">
                {
                    packages?.map(pkg => <Package
                        key={pkg._id}
                        pkg={pkg}
                    ></Package>)
                }
                <hr />
                <Chart></Chart>
                <hr className='my-5' />

                <div className='p-5'>
                    <div className='row g-5 p-5'>
                        <img className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6' src={img} alt="" />
                        <h1 className='text col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-center'>Seeing Is Living. Let's travel the world and make this life worth living.
                            Let's make every single moment cherish for another moment spent at a different location of this beautiful planet</h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;