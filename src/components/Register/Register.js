import React from 'react';
import { Form, Button, FloatingLabel, Row, Col, Container } from 'react-bootstrap';
import './Register.css';
import img from '../../images/signup.png';
import { Link } from 'react-router-dom';
//import useAuth from './../../hook/useAuth';



const Register = () => {
    // const { processLogin } = useAuth();
    return (
        <div className="from ">
           <Container>
                <>
                    <Row>
                        <Col lg={5} md={4} className="input-from">
                            <div className="my-5 mx-5">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3 w-75 mx-auto"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password" className="w-75 mx-auto">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>

                                <Button className="button my-5" variant="primary" type="submit">
                                Register
                                </Button>
                                <Link to="/"></Link>
                                <span>I have an account <Link to="/login">Login</Link></span><br />

                                <button className="online-btn google"><i class="fab fa-google"></i>Google</button>
                              
                             <button className="online-btn github"><i class="fab fa-github"></i> Github</button>
                            
                         </div>
                            
                        </Col>

                        <Col lg={7} md={8}>
                            <div>
                                <img className="w-75" src={img} alt="" />
                            </div>

                        </Col>
                    </Row>
                </>

           </Container>


        </div>


    );
};

export default Register;