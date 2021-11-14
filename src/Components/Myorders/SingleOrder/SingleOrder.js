import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col } from 'react-bootstrap';

const SingleOrder = ({ order }) => {

    const { img, price, productName, _id } = order;

    const handleRemove = () => {
        const proceed = window.confirm('Are You Sure You Want To Remove This package?')
        if (proceed) {
            const url = `https://frozen-reef-63727.herokuapp.com/orders/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Removed The package");
                        window.location.reload(false);
                    }
                })
        }
    }

    return (
        <Col xs={12} sm={3} md={3} lg={3} xl={4} xxl={4}>
            <img className="img-fluid" src={img} alt="" />
            <h4 className="text">{productName}</h4>
            <small style={{ color: '#F82E40' }}>Price: ${price}</small>
            <br />
            <Button onClick={handleRemove} className="purchase-btn mt-3">Cancel Order</Button>
        </Col>
    );
};

export default SingleOrder;