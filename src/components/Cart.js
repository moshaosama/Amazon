
import { useState } from "react";
import { Card, Col, Container, Form, Nav, Navbar, Offcanvas, Row} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios'

function Cart () {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    const CartState=useSelector(state=> state.Carts)
    console.log(CartState);
    return (
        <>
        <div className='bg-dark'>
            <Container>
                <Navbar>
                    <Navbar.Brand className="text-light">Amazon</Navbar.Brand>
                    <Navbar.Brand className='text-light'>
                        <Form>
                            <Form.Control type='text' placeholder='Enter Your Search' id='Input'/>
                        </Form>
                    </Navbar.Brand>
                    <Nav>
                    <Nav.Link className='text-light'><Link to={"/"} className='text-light text-decoration-none'>Home</Link></Nav.Link>
                        <Nav.Link className='text-light'><Link to={"SignIn"} className='text-light text-decoration-none'>Sign In</Link></Nav.Link>
                        <Nav.Link className='text-light'>Orders</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
        <div className='bg-dark' id='Nav2'>
            <Navbar>
                <Navbar.Brand></Navbar.Brand>
                <Nav>
                    <Nav.Link className='text-light' onClick={handleShow} id='Btn_Nav2'>All</Nav.Link>
                        <Offcanvas show={show} onHide={handleHide}>
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <Link to={"SignIn"} className='btn btn-dark' id='Btn_Signin'>
                                    Hello Sign In
                                </Link>
                            </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            <h5><b>Digital Content & Devices</b></h5>
                            <div className='btn btn-light' id='Btn_Content'> 
                                Amazon Music
                            </div>
                            <div className='btn btn-light' id='Btn_Content'> 
                                Kindle E-readers & Books
                            </div>
                            <div className='btn btn-light' id='Btn_Content'> 
                                Amazon Appstore
                            </div>
                            <hr/>
                            <h5><b>Shop By Department</b></h5>
                            <div className='btn btn-light' id='Btn_Content'> 
                                Electronics
                            </div>
                            <div className='btn btn-light' id='Btn_Content'> 
                                Computers
                            </div>
                            <div className='btn btn-light' id='Btn_Content'> 
                                Smart Home
                            </div>
                            <div className='btn btn-light' id='Btn_Content'> 
                                Arts & Crafts
                            </div>
                            <hr/>
                            <h5><b>Help & Settings</b></h5>
                            <div className='btn btn-light' id='Btn_Content'> 
                                Your Account
                            </div>
                            <div className='btn btn-light' id='Btn_Content'> 
                                SIgn In
                            </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <Nav.Link id='Btn_Nav2' className='text-light'>Today's Deals</Nav.Link>
                        <Nav.Link id='Btn_Nav2' className='text-light'>Customer Service</Nav.Link>
                        <Nav.Link id='Btn_Nav2' className='text-light'>Registry</Nav.Link>
                        <Nav.Link id='Btn_Nav2' className='text-light'>Gift Cards</Nav.Link>
                        <Nav.Link id='Btn_Nav2' className='text-light'>Sells</Nav.Link>
                </Nav>
            </Navbar>
        </div>
        <div>
                    {
                        CartState?.length==0 ? 
                        <>
                        <Container>
                            <div className="bg-light  mt-4 w-75">
                                <img src="https://m.media-amazon.com/images/G/42/cart/empty/kettle-desaturated._CB659190457_.svg" style={{width:"20rem"}}/>
                                <div className="Empty">
                                    <h4><p>Your Amazon cart is empty</p></h4>
                                    <p><Link to={"/"} className="text-decoration-none text-success">Go to Products</Link></p>
                                    <p>
                                        <Link to={"SignIn"}className="btn btn-warning w-75">
                                            SIgn In Now
                                        </Link>
                                    </p>
                                </div>
                                
                            </div>
                        </Container>
                        </> :
                        <Container>
                            <Row>
                                {
                                    CartState?.map((el) => {
                                        return(
                                            <Col>
                                                <Card style={{ width: '18rem'}}>
                                                    <Card.Img variant="top" src={el.image} />
                                                    <Card.Body>
                                                        <Card.Title><b>{el.title}</b></Card.Title>
                                                        <Card.Text>
                                                        <li>Price: {el.price}$ <del>{el?.rating?.count}$</del></li>
                                                        <li>category: {el.category}</li>
                                                        </Card.Text>
                                                        
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    }
        </div>
        </>
    )
}
export default Cart;