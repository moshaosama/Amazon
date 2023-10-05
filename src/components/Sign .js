import { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from 'sweetalert2'

function Signin() {
    const [userName , setUserName] = useState('')
    return(
        <>
        <div className="bg-light" style={{margin:"10px 30pc 0px 30pc" , borderRadius:"10px"}}>
            <Container style={{display:"flex" , justifyContent:"center"}}>
                <Navbar>
                    <Navbar.Brand><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRZXg_t2KFkaOiJ-GEl9nRqLoO0RkhtaVNg&usqp=CAU" style={{width:"10pc" , textAlign:"center"}}/></Navbar.Brand>
                </Navbar>
            </Container>
        </div>
        <div className="bg-light" style={{margin:"0px 30pc" ,border:"1px solid" ,borderRadius:"5px"}}>
            <Container>
                <div style={{margin:"15px"}}>
                    <h4><b>Sign In</b></h4>
                    <Form>
                        <Form.Label><b>Email or mobile phone number</b></Form.Label>
                        <Form.Control type="text" style={{border:"1px solid"}} onChange={(e) => {setUserName(e.target.value)}} id='Email'/>
                    </Form>
                    <div className="btn btn-warning" style={{display:"flex" ,justifyContent:"center",margin:"15px 10pc"}} onClick={() => {
                        if(userName==''){
                            swal.fire({
                                title:"Please Enter your email or mobile phone number",
                                icon:"error",
                                showCancelButton:true,
                            }).then((data) => {
                                if(data.isConfirmed){
                                    document.getElementById("Email").focus();
                                }
                            })
                        }
                    }}>
                        continue
                    </div>
                    <p>
                    By signing in, you agree to Amazon's <a href="#" className="text-decoration-none">Conditions of Use</a> and <a href="#" className="text-decoration-none">Conditions of Use</a>.
                    </p>
                    <a href="" style={{textDecoration:"none"}} onClick={(e) => {
                        e.preventDefault();
                        if(document.getElementById("Need Help").style.display="none"){
                            document.getElementById("Need Help").style.display="flex";
                        }else if(document.getElementById("Need Help").style.display="flex"){
                            document.getElementById("Need Help").style.display="none";
                        }
                    }}>{">"} Need Help?</a>
                    <div style={{display:"none" , flexDirection:"column"}} id="Need Help">
                        <li><a href="" style={{textDecoration:"none"}}> Forget Your Password?</a></li>
                        <li><a href="" style={{textDecoration:"none"}}>Other issues with Sign-In</a></li>
                    </div>
                    
                </div>
            </Container>
        </div>
        <div style={{textAlign:"center"}}>
                <p className="New_Account">New to Amazon?</p>
                <Link to={"NewAccount"} className="btn btn-light" style={{border:"1px solid", width:"25pc"}}>
                    Create your Amazon account
                </Link>
        </div>
        </>
    )
}
export default Signin;