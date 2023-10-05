import { useEffect, useState } from 'react';
import {Container, Nav, Navbar ,Form, Offcanvas, Row, Col, Card, Carousel} from 'react-bootstrap'
import {useSelector , useDispatch} from 'react-redux'
import { fetchProduct } from '../Store/Reducer/ProductsSLice';
import { add_Product } from '../Store/Reducer/CartSlice';
import { Link } from 'react-router-dom';
function Home () {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    const ProductState =useSelector(state => state.Products)
    const CartState=useSelector(state=> state.Carts)
    const Dispatch =useDispatch()
    useEffect(() => {
        Dispatch(fetchProduct())
    },[])

    return (
        <>
        <div className='bg-dark'>
            <Container>
                <Navbar className='d-flex' id='Navbar'>
                    <Navbar.Brand className='text-light'>Amazon</Navbar.Brand>
                    <Navbar.Brand className='text-light'>
                        <Form>
                            <Form.Control type='text' placeholder='Enter Your Search' id='Input'/>
                        </Form>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link className='text-light'><Link to={"/"} className='text-light text-decoration-none'>Home</Link></Nav.Link>
                        <Nav.Link className='text-light'><Link to={"SignIn"} className='text-light text-decoration-none'>Sign In</Link></Nav.Link>
                        <Nav.Link className='text-light' ><Link to={"SignIn"} className='text-light text-decoration-none'>Orders</Link></Nav.Link>
                        <Nav.Link className='text-light'><Link to={"Cart"} className='text-light text-decoration-none'>Cart: {CartState?.length}</Link></Nav.Link>
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
            <Carousel>
                <Carousel.Item>
                    <img src='https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg' style={{width:"95pc"}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg' style={{width:"95pc"}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg' style={{width:"95pc"}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg' style={{width:"95pc"}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg' style={{width:"95pc"}}/>
                </Carousel.Item>
            </Carousel>
        </div>
        <div style={{position:"relative", bottom:"25pc"}}>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '20rem'}}>
                            <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCbfI_zIAfUVnyOHAC5RZfLcSgy-CbNRTSw&usqp=CAU'/>
                            <Card.Title><b>electronics</b></Card.Title>
                            <div className='btn btn-primary' style={{width:"7pc"}}>
                                Shop Now
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem'}}>
                            <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRF-dZ15qBJS1NjIaMlTeviv9Rk8mTLe9GOQ&usqp=CAU'/>
                            <Card.Title><b>jewelery</b></Card.Title>
                            <div className='btn btn-primary' style={{width:"7pc"}}>
                                Shop Now
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem'}}>
                            <Card.Img variant="top" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMG9Xc77FiYYwCy3jEohUCrqWH_vP9xK_9Dg&usqp=CAU'/>
                            <Card.Title><b>clothing</b></Card.Title>
                            <div className='btn btn-primary' style={{width:"7pc"}}>
                                Shop Now
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <div style={{position:'relative' , bottom:'20pc'}}>
            <Container>
                <Row>
                    {
                        ProductState?.map((el) => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem'}}>
                                        <Card.Img variant="top" src={el.image} />
                                        <Card.Body>
                                            <Card.Title>{el.title}</Card.Title>
                                            <Card.Text>
                                            <li><b>Price: {el.price}$ <del>{el?.rating?.count}$</del></b></li>
                                            <li><b>category: {el.category}</b></li>
                                            </Card.Text>
                                            <div className='btn btn-outline-primary' onClick={() => {
                                                    Dispatch(add_Product(el))
                                            }}>
                                                Add to Cart
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
        </>
    )
}
export default Home;