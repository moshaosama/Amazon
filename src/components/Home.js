import { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Offcanvas,
  Row,
  Col,
  Card,
  Carousel,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../Store/Reducer/ProductsSLice";
import { add_Product } from "../Store/Reducer/CartSlice";
import { Link } from "react-router-dom";
function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const ProductState = useSelector((state) => state.Products);
  const CartState = useSelector((state) => state.Carts);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchProduct());
  }, []);

  return (
    <>
      <div>
        <div className="bg-dark">
          <Container>
            <Navbar className="d-flex" id="Navbar">
              <Navbar.Brand className="text-light">Amazon</Navbar.Brand>
              <Navbar.Brand className="text-light">
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Search"
                    id="Input"
                  />
                </Form>
              </Navbar.Brand>
              <Nav>
                <Nav.Link className="text-light">
                  <Link
                    to={"/Home"}
                    className="text-light text-decoration-none"
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-light">
                  <Link
                    to={"SignIn"}
                    className="text-light text-decoration-none"
                  >
                    Sign In
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-light">
                  <Link
                    to={"SignIn"}
                    className="text-light text-decoration-none"
                  >
                    Orders
                  </Link>
                </Nav.Link>
                <Nav.Link className="text-light">
                  <Link to={"Cart"} className="text-light text-decoration-none">
                    Cart: {CartState?.length}
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </div>
        <div className="bg-dark" id="Nav2">
          <Navbar>
            <Navbar.Brand></Navbar.Brand>
            <Nav>
              <Nav.Link
                className="text-light"
                onClick={handleShow}
                id="Btn_Nav2"
              >
                All
              </Nav.Link>
              <Offcanvas show={show} onHide={handleHide}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <Link
                      to={"SignIn"}
                      className="btn btn-dark"
                      id="Btn_Signin"
                    >
                      Hello Sign In
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <h5>
                    <b>Digital Content & Devices</b>
                  </h5>
                  <div className="btn btn-light" id="Btn_Content">
                    Amazon Music
                  </div>
                  <div className="btn btn-light" id="Btn_Content">
                    Kindle E-readers & Books
                  </div>
                  <div className="btn btn-light" id="Btn_Content">
                    Amazon Appstore
                  </div>
                  <hr />
                  <h5>
                    <b>Shop By Department</b>
                  </h5>
                  <div className="btn btn-light" id="Btn_Content">
                    Electronics
                  </div>
                  <div className="btn btn-light" id="Btn_Content">
                    Computers
                  </div>
                  <div className="btn btn-light" id="Btn_Content">
                    Smart Home
                  </div>
                  <div className="btn btn-light" id="Btn_Content">
                    Arts & Crafts
                  </div>
                  <hr />
                  <h5>
                    <b>Help & Settings</b>
                  </h5>
                  <div className="btn btn-light" id="Btn_Content">
                    Your Account
                  </div>
                  <div className="btn btn-light" id="Btn_Content">
                    SIgn In
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
              <Nav.Link id="Btn_Nav2" className="text-light">
                <Link to={"TodaysDells"}>Today's Deals</Link>
              </Nav.Link>
              <Nav.Link id="Btn_Nav2" className="text-light">
                Customer Service
              </Nav.Link>
              <Nav.Link id="Btn_Nav2" className="text-light">
                Registry
              </Nav.Link>
              <Nav.Link id="Btn_Nav2" className="text-light">
                Gift Cards
              </Nav.Link>
              <Nav.Link id="Btn_Nav2" className="text-light">
                Sells
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
                style={{ width: "95pc" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
                style={{ width: "95pc" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
                style={{ width: "95pc" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
                style={{ width: "95pc" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
                style={{ width: "95pc" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div style={{ position: "relative", bottom: "25pc" }}>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCbfI_zIAfUVnyOHAC5RZfLcSgy-CbNRTSw&usqp=CAU"
                  />
                  <Card.Title>
                    <b>electronics</b>
                  </Card.Title>
                  <div
                    className="btn btn-primary"
                    style={{
                      width: "7pc",
                      boxShadow: "0px 0px 15px 1px white",
                    }}
                  >
                    Shop Now
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRF-dZ15qBJS1NjIaMlTeviv9Rk8mTLe9GOQ&usqp=CAU"
                  />
                  <Card.Title>
                    <b>jewelery</b>
                  </Card.Title>
                  <div className="btn btn-primary" style={{ width: "7pc" }}>
                    Shop Now
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMG9Xc77FiYYwCy3jEohUCrqWH_vP9xK_9Dg&usqp=CAU"
                  />
                  <Card.Title>
                    <b>clothing</b>
                  </Card.Title>
                  <div className="btn btn-primary" style={{ width: "7pc" }}>
                    Shop Now
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ position: "relative", bottom: "20pc" }}>
          <Container>
            <Row>
              {ProductState?.map((el) => {
                return (
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={el.image} />
                      <Card.Body>
                        <Card.Title>{el.title}</Card.Title>
                        <Card.Text>
                          <li>
                            <b>
                              Price: {el.price}$ <del>{el?.rating?.count}$</del>
                            </b>
                          </li>
                          <li>
                            <b>category: {el.category}</b>
                          </li>
                        </Card.Text>
                        <div
                          className="btn btn-outline-primary"
                          onClick={() => {
                            Dispatch(add_Product(el));
                          }}
                        >
                          Add to Cart
                        </div>
                        <Link
                          to={`${el?.id}`}
                          className="btn btn-outline-primary"
                          style={{ position: "relative", left: "5pc" }}
                        >
                          Show
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div>
          <footer className="bg-dark text-center text-light">
            <Container className=" p-4">
              <section className="mb-4">
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/mohamedosamakin/"}
                  className="btn btn-outline-light m-1"
                  style={{ borderRadius: "10pc" }}
                >
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link
                  target="_blank"
                  to={"https://twitter.com/mohamedosfekry"}
                  className="btn btn-outline-light m-1"
                  style={{ borderRadius: "10pc" }}
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  target="_blank"
                  to={"https://www.instagram.com/this_fekry/"}
                  className="btn btn-outline-light m-1"
                  style={{ borderRadius: "10pc" }}
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  target="_blank"
                  to={"https://www.linkedin.com/in/thisfekry/"}
                  className="btn btn-outline-light m-1"
                  style={{ borderRadius: "10pc" }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link
                  target="_blank"
                  to={"https://github.com/moshaosama"}
                  className="btn btn-outline-light m-1"
                  style={{ borderRadius: "10pc" }}
                >
                  <i className="fab fa-github"></i>
                </Link>
              </section>
              <section>
                <Row className="d-flex justify-content-center">
                  <Col>
                    <p>Sign up for our newsletter</p>
                  </Col>
                  <Col>
                    <Form>
                      <Form.Control type="text" placeholder="Email Address" />
                    </Form>
                  </Col>
                  <Col>
                    <div className="btn btn-outline-light">Subscribe</div>
                  </Col>
                </Row>
              </section>
              <section className="p-4">
                <p>
                  <b>Amazon App</b>
                </p>
              </section>
              <section>
                <Row>
                  <Col>
                    <h5 className="text-uppercase">Products</h5>
                    <ul className="list-unstyled">
                      <li>
                        <b>Html</b>
                      </li>
                      <li>
                        <b>Css</b>
                      </li>
                      <li>
                        <b>JavaScript</b>
                      </li>
                      <li>
                        <b>React</b>
                      </li>
                      <li>
                        <b>Redux</b>
                      </li>
                      <li>
                        <b>Bootstrap</b>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <h5 className="text-uppercase">USEFUL LINKS</h5>
                    <ul className="list-unstyled">
                      <li style={{ margin: "10px" }}>
                        <b className="text-secondary">Pricing</b>
                      </li>
                      <li style={{ margin: "10px" }}>
                        <b className="text-secondary">Settings</b>
                      </li>
                      <li style={{ margin: "10px" }}>
                        <b className="text-secondary">Orders</b>
                      </li>
                      <li style={{ margin: "10px" }}>
                        <b className="text-secondary">Help</b>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <h5 className="text-uppercase">Contact</h5>
                    <ul className="list-unstyled">
                      <li style={{ margin: "10px" }}>
                        <i className="fas fa-home"></i>
                        <b className="text-secondary">
                          {" "}
                          6 October, Elhosry ,Karma City
                        </b>
                      </li>
                      <li style={{ margin: "10px" }}>
                        <i className="fas fa-envelope"></i>
                        <b className="text-secondary">
                          {" "}
                          mohamedOsFekry@gmail.com
                        </b>
                      </li>
                      <li style={{ margin: "10px" }}>
                        <i className="fas fa-phone"></i>
                        <b
                          className="text-secondary"
                          style={{ margin: "3.2pc" }}
                        >
                          {" "}
                          +20 1004365707
                        </b>
                      </li>
                      <li>
                        <i className="fas fa-print"></i>
                        <b
                          className="text-secondary"
                          style={{ margin: "3.2pc" }}
                        >
                          {" "}
                          +20 1004365707
                        </b>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </section>
            </Container>
          </footer>
        </div>
      </div>
    </>
  );
}
export default Home;
