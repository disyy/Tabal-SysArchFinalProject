import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaCrow } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';



function Signup() {
  const history = useNavigate();
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/signup", {
        Name,
        email,
        password
      })
        .then(res => {
          if (res.data === "exist") {
            alert("User already exists");
          }
          else if (res.data === "notexist") {
            history("/HomePage", { state: { id: email } });
          }
        })
        .catch(e => {
          alert("wrong details");
          console.log(e);
        });

    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#BDCDD6" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FaCrow className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input  type="Name" onChange={(e) => { setName(e.target.value) }} placeholder="Name"/>
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FaCrow className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <FaCrow className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree to all statements in <a href="#!">Terms of Service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                         
                          <button type="button" className="btn btn-primary btn-lg"  onClick={submit} >Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-dark text-light py-3 mt-5">
        <Container>
          <Row>
            <Col>
              <p className="text-center">&copy; 2023 Your Website Name. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Signup;
