import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import swal from "sweetalert2";

function Pay() {
  const [Email, setEmail] = useState("");
  const [Payment, setPayment] = useState("");
  const [Credit, setCredit] = useState("");
  const [Address, setAdress] = useState("");
  const [City, setCity] = useState("");
  const [state, setstate] = useState("");
  return (
    <>
      <div>
        <Container>
          <Form
            className="bg-light"
            style={{
              margin: "0px 20pc",
              height: "27pc",
              position: "relative",
              top: "5pc",
              borderRadius: "10px",
              boxShadow: "5px 5px 30px 1px",
            }}
            id="Form"
          >
            <div>
              <Form.Label style={{ position: "relative", left: "5pc" }}>
                <li>
                  <b>Email</b>
                </li>
              </Form.Label>
              <Form.Control
                type="Email"
                style={{ width: "30pc", position: "relative", left: "5pc" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Form.Label style={{ position: "relative", left: "5pc" }}>
                <li>
                  <b>Payment Amount</b>
                </li>
              </Form.Label>
              <Form.Control
                type="text"
                style={{ width: "30pc", position: "relative", left: "5pc" }}
                placeholder="0,00"
                onChange={(e) => setPayment(e.target.value)}
              />
            </div>
            <div>
              <Form.Label style={{ position: "relative", left: "5pc" }}>
                <li>
                  <b>Credit Card</b>
                </li>
              </Form.Label>
              <Form.Control
                type="text"
                style={{ width: "30pc", position: "relative", left: "5pc" }}
                placeholder="Credit Number"
                onChange={(e) => setCredit(e.target.value)}
              />
            </div>
            <div>
              <Form.Label style={{ position: "relative", left: "5pc" }}>
                <li>
                  <b>Address</b>
                </li>
              </Form.Label>
              <Form.Control
                type="text"
                style={{ width: "30pc", position: "relative", left: "5pc" }}
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", margin: "15px 0px" }}>
              <div>
                <Form.Label
                  style={{ position: "absolute", bottom: "4pc", left: "5pc" }}
                >
                  <li>
                    <b>City</b>
                  </li>
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "10pc", position: "relative", left: "5pc" }}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <Form.Label
                  style={{ position: "absolute", bottom: "4pc", left: "25pc" }}
                >
                  <li>
                    <b>State</b>
                  </li>
                </Form.Label>
                <Form.Control
                  type="number"
                  style={{ width: "10pc", position: "relative", left: "15pc" }}
                  onChange={(e) => setstate(e.target.value)}
                />
              </div>
            </div>
            <div
              className="btn btn-primary"
              style={{ position: "relative", top: "2pc", left: "14pc" }}
              onClick={() => {
                if (!Email.match(/.[A-Za-z]*[@]*[A-Za-z]*[.][a-z]/)) {
                  swal
                    .fire({
                      title: "Email is required",
                      icon: "error",
                      showCancelButton: true,
                    })
                    .then((data) => {});
                } else if (Payment == "") {
                  swal
                    .fire({
                      title: "Payment is required",
                      icon: "error",
                      showCancelButton: true,
                    })
                    .then((data) => {});
                } else if (Credit == "") {
                  swal
                    .fire({
                      title: "Credit Card is required",
                      icon: "error",
                      showCancelButton: true,
                    })
                    .then((data) => {});
                } else if (Address == "") {
                  swal
                    .fire({
                      title: "Address is required",
                      icon: "error",
                      showCancelButton: true,
                    })
                    .then((data) => {});
                } else if (City == "") {
                  swal
                    .fire({
                      title: "City is required",
                      icon: "error",
                      showCancelButton: true,
                    })
                    .then((data) => {});
                } else if (state == "") {
                  swal
                    .fire({
                      title: "State is required",
                      icon: "error",
                      showCancelButton: true,
                    })
                    .then((data) => {});
                } else {
                  document.getElementById("Form").style.display = "none";
                  document.getElementById("Alert_Success").style.display =
                    "block";

                  setTimeout(() => {
                    document.getElementById("Alert_Success").style.display =
                      "none";
                    document.getElementById("Form").style.display = "block";
                    document.querySelector(".Alert_Success").style.animation =
                      "MoveIn 1s alternate-reverse 1";
                  }, 2000);
                }
              }}
            >
              Submit Online Payment
            </div>
          </Form>
        </Container>
      </div>
      <div
        style={{ textAlign: "center", display: "none" }}
        id="Alert_Success"
        className="Alert_Success"
      >
        <Container
          className="bg-light"
          style={{
            width: "25pc",
            position: "relative",
            top: "10pc",
            padding: "2pc",
            borderRadius: "10px",
            boxShadow: "5px 5px 30px 1px blue",
          }}
        >
          <img
            src="https://www.lokkeestudios.com/_astro/contact-success.7256c5ee.svg"
            style={{ width: "15pc", position: "relative", bottom: "1pc" }}
          />
          <h1 className="text-primary">
            <b>Successfully</b>
          </h1>
          <li>
            <b>Sent for Youe Email</b>
          </li>
        </Container>
      </div>
    </>
  );
}

export default Pay;
