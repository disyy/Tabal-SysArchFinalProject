import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link ,useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function Login() {
  const history = useNavigate();
  const location = useLocation();
  const id = location?.state?.id || ""; 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/HomePage", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User has not signed up");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#567189" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://image.similarpng.com/very-thumbnail/2021/07/Fitness-Gym-logo-design-template-on-transparent-background-PNG.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
            Skill Mastery
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="What do you want to learn?"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="HomePage">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Signup">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="vh-100" style={{ backgroundColor: "#BDCDD6" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Log In
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form1Example13"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form1Example23"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form1Example23"
                          >
                            Password
                          </label>
                        </div>
                        <div className="d-flex justify-content-around align-items-center mb-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="form1Example3"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form1Example3"
                            >
                              Remember me
                            </label>
                          </div>
                          <a href="#!">Forgot password?</a>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                          onClick={submit}
                        >
                          Sign in
                        </button>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-dark text-light py-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-center">
                &copy; 2023 Your Website Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
