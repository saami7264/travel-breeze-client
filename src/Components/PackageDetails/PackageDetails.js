import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './PackageDetails.css';

const PackageDetails = () => {

    const { packageId } = useParams()
    const { user } = useAuth()

    const [pack, setPack] = useState()

    const initialInfo = { name: user?.displayName, email: user?.email, phone: '' }

    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const history = useHistory();

    useEffect(() => {
        fetch(`https://frozen-reef-63727.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPack(data))
    }, [packageId])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...orderInfo }
        newInfo[field] = value;
        setOrderInfo(newInfo)
    }

    const handlePurchase = e => {
        const order = {
            ...orderInfo,
            productName: `${pack?.name}`,
            img: `${pack?.img}`,
            price: `${pack?.price}`
        }

        fetch('https://frozen-reef-63727.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                alert("Order Placed Successfully");
                history.push('/')
            })

        e.preventDefault();
    }

    return (
        <div className='my-5'>
            <Container>
                <Row>
                    <Col xs={12} sm={7} md={7} lg={7} xl={7}>
                        <img className="img-fluid p-5" src={pack?.img} alt="" />
                    </Col>
                    <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                        <h5 className='w-75 mx-auto my-5'>{pack?.name} is one of the biggest and greatest city in that part of the world where it belongs. It basically signifies and also defines the continent in which it is situated. Millions of travellers visit {pack?.name} every year from all over the world. And with travelling increasing througout the whole world in recent years, this city has become one of the major travel destination in the world.</h5>
                        <h5 className='text'>We are here to make your travelling dreams convenient</h5>
                        <form onSubmit={handlePurchase} className="mt-3">
                            <input className="purchase-field" onBlur={handleOnBlur} name="name" type="text" placeholder="Name" defaultValue={user?.displayName} />

                            <input className="purchase-field" onBlur={handleOnBlur} name="email" type="email" placeholder="Email" defaultValue={user?.email} />

                            <input className="purchase-field" onBlur={handleOnBlur} name="phone" type="number" placeholder="Phone Number" />

                            <br />

                            <textarea className="address-field" onBlur={handleOnBlur} name="address" type="text" placeholder="Address" />

                            <br />
                            <button type="submit" className="purchase-btn mb-5 mt-3">Book Now</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PackageDetails;