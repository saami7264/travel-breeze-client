import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import img1 from '../../images/bali.jpg'
import img2 from '../../images/maldives.jpg'
import img3 from '../../images/swizerland.jpg'
import logo from '../../images/travel.png'

const Header = () => {
    const { user, logOut } = useAuth()
    console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand to="/home">
                        <Link to="/home">
                            <img src={logo} style={{ height: '70px', width: '120px' }} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-start">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {
                                user?.email ?
                                    <>
                                        <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                                        <Nav.Link as={Link} to="/allOrders">Manage All Orders</Nav.Link>
                                        <Nav.Link as={Link} to="/addService">Add A New Package</Nav.Link>
                                        <button onClick={logOut} style={{ backgroundColor: '#5AE4A7' }} className='me-5 border-3 rounded-3'>Log Out</button>
                                    </>
                                    :

                                    <div>
                                        <Nav.Link className='d-inline-block' as={Link} to="/login">Login</Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img height='600px'
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-black'>Bali - Indonesia</h3>
                            <p className='text-black'>The beautiful, sunny and sandy beaches of the Bali island in Indonesia are waiting for you and your loved ones</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height='600px'
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">Maldives</h3>
                            <p className="text-dark">The queen of Indian Ocean, The Maldives, with it's numerous and remarkable beaches are just few clicks away.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height='600px'
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Switzerland</h3>
                            <p>The most beautiful country in the world with it's scenic landscapes and green mountains is ready to take in you and your loved ones.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Header;