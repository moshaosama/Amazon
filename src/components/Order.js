import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Store/Reducer/ProductsSLice";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Order() {
  const stateOrder = useSelector((state) => state.Carts);
  const Dispatch = useDispatch();
  console.log(stateOrder);
  return (
    <>
      {stateOrder?.length == 0 ? (
        <>
          <Container>
            <div className="bg-light  mt-4 w-75">
              <img
                src="https://m.media-amazon.com/images/G/42/cart/empty/kettle-desaturated._CB659190457_.svg"
                style={{ width: "20rem" }}
              />
              <div className="Empty">
                <h4>
                  <p>Your Amazon Order is empty</p>
                </h4>
                <p>
                  <Link to={"/"} className="text-decoration-none text-success">
                    Go to Products
                  </Link>
                </p>
              </div>
            </div>
          </Container>
        </>
      ) : (
        <Container>
          <Row>
            <Link className="btn btn-primary" to={"Pay"}>
              Pay Now
            </Link>
            <p
              style={{
                textAlign: "center",
                margin: "50px 0px",
                boxShadow: "5px 1px 30px 5px",
                borderRadius: "30px",
                border: "1px solid",
              }}
            >
              <b>Check Your Order</b>
            </p>
            {stateOrder?.map((el) => {
              return (
                <Col>
                  <Card style={{ width: "15rem" }}>
                    <Card.Img src={el?.image} variant="top" />
                    <Card.Body>
                      <Card.Title>
                        <b>{el.title}</b>
                      </Card.Title>
                      <Card.Text>
                        <li>
                          <b>Price: </b>
                          {el.price}$ <del>{el?.rating?.count}$</del>
                        </li>
                        <li>
                          <b>Category: </b>
                          {el.category}
                        </li>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
}

export default Order;
