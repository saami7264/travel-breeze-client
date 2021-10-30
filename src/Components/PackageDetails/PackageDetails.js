import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {

    const { packageId } = useParams()

    const [pack, setPack] = useState()

    useEffect(() => {
        fetch(`https://frozen-reef-63727.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPack(data))
    }, [])

    return (
        <div className='my-5'>
            <img src={pack?.img} alt="" />
            <h3 className='w-75 mx-auto my-5'>{pack?.name} is one of the biggest and greatest city in that part of the world where it belongs. It basically signifies and also defines the continent in which it is situated. Millions of travellers visit {pack?.name} every year from all over the world. And with travelling increasing througout the whole world in recent years, this city has become one of the major travel destination in the world.</h3>
            <h5 className='text'>We are here to make your travelling dreams convenient</h5>
        </div>
    );
};

export default PackageDetails;