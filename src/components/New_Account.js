import { useState } from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function New_Account() {
    const [Name, setName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Password, setPassword] = useState("");
    const [RePass, setRePass] = useState("");
    return (
        <>
        <div
            className="bg-light"
            style={{ margin: "10px 30pc 0px 30pc", borderRadius: "10px" }}
        >
            <Container style={{ display: "flex", justifyContent: "center" }}>
            <Navbar>
                <Navbar.Brand>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRZXg_t2KFkaOiJ-GEl9nRqLoO0RkhtaVNg&usqp=CAU"
                    style={{ width: "10pc", textAlign: "center" }}
                />
                </Navbar.Brand>
            </Navbar>
            </Container>
        </div>
        <div
            className="bg-light"
            style={{ margin: "0px 30pc", border: "1px solid", borderRadius: "5px" }}
        >
            <Container>
            <div style={{ margin: "15px" }}>
                <h4>
                <b>Sign In</b>
                </h4>
                <Form>
                <Form.Label>
                    <b>Your name</b>
                </Form.Label>
                <Form.Control
                    type="text"
                    style={{ border: "1px solid" }}
                    onChange={(e) => {
                    setName(e.target.value);
                    }}
                    id="Name"
                />
                <Form.Label>
                    <b>Mobile number or email</b>
                </Form.Label>
                <Form.Control
                    type="text"
                    style={{ border: "1px solid" }}
                    onChange={(e) => {
                    setMobile(e.target.value);
                    }}
                    id="Mobile"
                />
                <Form.Label>
                    <b>Password</b>
                </Form.Label>
                <Form.Control
                    type="password"
                    style={{ border: "1px solid" }}
                    onChange={(e) => {
                    setPassword(e.target.value);
                    }}
                    id="Pass"
                />
                <Form.Label>
                    <b>Re-enter password</b>
                </Form.Label>
                <Form.Control
                    type="password"
                    style={{ border: "1px solid" }}
                    onChange={(e) => {
                    setRePass(e.target.value);
                    }}
                    id="rePass"
                />
                </Form>
                <div
                className="btn btn-warning"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "15px 10pc",
                }}
                onClick={() => {
                    if (Name == "") {
                    Swal.fire({
                        title: "Please Enter your Name",
                        icon: "error",
                        showCancelButton: true,
                    }).then((data) => {
                        if (data.isConfirmed) {
                        document.getElementById("Name").focus();
                        }
                    });
                    } else if (Mobile == "") {
                    Swal.fire({
                        title: "Please Enter your Mobile Or Email Address",
                        icon: "error",
                        showCancelButton: true,
                    }).then((data) => {
                        if (data.isConfirmed) {
                        document.getElementById("Mobile").focus();
                        }
                    });
                    } else if (Password == "") {
                    Swal.fire({
                        title: "Please Enter your Password",
                        icon: "error",
                        showCancelButton: true,
                    }).then((data) => {
                        if (data.isConfirmed) {
                        document.getElementById("Pass").focus();
                        }
                    });
                    } else if (RePass == "") {
                    Swal.fire({
                        title: "Please Enter your RePass",
                        icon: "error",
                        showCancelButton: true,
                    }).then((data) => {
                        if (data.isConfirmed) {
                        document.getElementById("rePass").focus();
                        }
                    });
                    } else if (Password != RePass) {
                    Swal.fire({
                        title: "Please Enter Password Equal RePass",
                        icon: "error",
                        showCancelButton: true,
                    }).then((data) => {
                        if (data.isConfirmed) {
                        document.getElementById("rePass").focus();
                        }
                    });
                    }
                }}
                >
                continue
                </div>
                <p>
                By signing in, you agree to Amazon's{" "}
                <a href="#" className="text-decoration-none">
                    Conditions of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-decoration-none">
                    Conditions of Use
                </a>
                .
                </p>
                <div
                style={{ display: "none", flexDirection: "column" }}
                id="Need Help"
                >
                <li>
                    <a href="" style={{ textDecoration: "none" }}>
                    {" "}
                    Forget Your Password?
                    </a>
                </li>
                <li>
                    <a href="" style={{ textDecoration: "none" }}>
                    Other issues with Sign-In
                    </a>
                </li>
                </div>
            </div>
            <div>
                <p>
                <b>
                    Already have an account?{" "}
                    <Link to={"/SignIn"} style={{ textDecoration: "none" }}>
                    Sign In
                    </Link>
                </b>
                </p>
            </div>
            </Container>
        </div>
        </>
    );
}

export default New_Account;
