import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Show() {
  const { elid } = useParams();
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${elid}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, []);
  console.log(Product);
  return (
    <>
      <div
        style={{
          position: "relative",
          top: "10pc",
          left: "22pc",
          margin: "0px 22pc 0pc 0pc",
        }}
      >
        <Container>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRZXg_t2KFkaOiJ-GEl9nRqLoO0RkhtaVNg&usqp=CAU"
              style={{
                position: "absolute",
                left: "20pc",
                bottom: "28pc",
                width: "7pc",
                borderRadius: "10px",
              }}
            />
          </div>
          <img
            src={Product?.image}
            style={{ width: "10pc", borderRadius: "30px" }}
          />
          <div
            style={{
              backgroundColor: "white",
              height: "13pc",
              position: "relative",
              left: "12pc",
              bottom: "13pc",
              margin: "0px 40pc 0px 0px",
              borderRadius: "30px",
            }}
          >
            <Container>
              <h3 id="Title" style={{ fontWeight: "bolder" }}>
                <b>{Product?.title}</b>
              </h3>
              <div style={{ display: "flex" }}>
                <p>
                  <b>Colors:</b>
                </p>
                <div
                  style={{
                    position: "relative",
                    left: "10px",
                    bottom: "3.8px",
                  }}
                >
                  <div
                    className="btn"
                    style={{
                      width: "5px",
                      height: "10px",
                      borderRadius: "20px",
                      backgroundColor: "red",
                      border: "1px solid black",
                      margin: "10px",
                    }}
                    onClick={(e) => {
                      document.getElementById("Title").style.color = "red";
                    }}
                  ></div>
                  <div
                    className="btn"
                    style={{
                      width: "5px",
                      height: "10px",
                      borderRadius: "20px",
                      backgroundColor: "yellow",
                      border: "1px solid black",
                      margin: "10px",
                    }}
                    onClick={(e) => {
                      document.getElementById("Title").style.color = "yellow";
                    }}
                  ></div>
                  <div
                    className="btn"
                    style={{
                      width: "5px",
                      height: "10px",
                      borderRadius: "20px",
                      backgroundColor: "#ae947b",
                      border: "1px solid black",
                      margin: "10px",
                    }}
                    onClick={(e) => {
                      document.getElementById("Title").style.color = "#ae947b";
                    }}
                  ></div>
                </div>
              </div>
              <p>
                category:<b>{Product?.category}</b>
              </p>
              <p>
                Price:
                <b>
                  {Product?.price}${" "}
                  <b>
                    <del>{Product?.rating?.count}</del>
                  </b>
                </b>
              </p>
              <Link
                to={"Pay"}
                className="btn btn-primary"
                style={{ position: "relative", left: "25pc", bottom: "3pc" }}
              >
                Pay it
              </Link>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Show;
