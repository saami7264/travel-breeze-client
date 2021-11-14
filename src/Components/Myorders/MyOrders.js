import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import SingleOrder from './SingleOrder/SingleOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState();

    useEffect(() => {
        const url = `https://frozen-reef-63727.herokuapp.com/orders?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])


    return (
        <div className="m-5">
            <h2 className="mb-5 text">Welcome {user?.displayName} -- Here Are Your Orders</h2>
            <Row>
                {orders?.map(order =>
                    <SingleOrder
                        key={order._id}
                        order={order}
                    ></SingleOrder>
                )}
            </Row>
        </div>
    );
};

export default MyOrders;