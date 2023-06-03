import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class HomePage extends Component {
  render() {
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
            Power Fitness
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
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Digital Marketing
                    </a>
                  </li>
                </ul>
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
        <div className="homebg" style={{ backgroundColor: "#BDCDD6", fontFamily: 'Spot' }}>
          <Container>
            <div className="jumbotron">
              <h3 className="display-4" style={{ fontSize: '50px' }}>Unlock Your Potential as a Single Parent with Skill Mastery</h3>
              <p className="lead">Welcome to our online training courses dedicated to helping single parents unlock their potential through skill mastery.</p>
              <hr className="my-4" />
              <p>Join us today and start your journey towards personal growth and success!</p>
            </div>
            <Container style={{ backgroundColor: "white", padding: "20px" }}>
              <Row>
                <Col md={4} sm={6}>
                  <div className="card">
                    <img src="https://static.vecteezy.com/system/resources/previews/004/759/058/original/change-career-decide-to-go-different-path-or-direction-challenge-to-find-new-way-or-opportunity-progress-to-other-choice-or-journey-concept-businessman-change-from-arrow-sign-to-other-direction-vector.jpg" className="card-img-top" alt="Fitness Programs" />
                    <div className="card-body">
                      <h5 className="card-title">Fitness Programs</h5>
                      <p className="card-text">1. Discover your strengths with Alison's Workplace Personality Assessment.</p>
                      <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="card">
                    <img src="https://static.vecteezy.com/system/resources/previews/002/167/289/non_2x/business-decision-making-career-path-work-direction-or-choose-the-right-way-to-success-concept-confusing-businessman-looking-at-multiple-road-sign-with-question-mark-and-thinking-which-way-to-go-vector.jpg" className="card-img-top" alt="Healthy Eating" />
                    <div className="card-body">
                      <h5 className="card-title">Healthy Eating</h5>
                      <p className="card-text">2. Find your perfect career. Explore 850+ career paths with related courses </p>
                      <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                  </div>
                </Col>
                <Col md={4} sm={6}>
                  <div className="card">
                    <img src="https://media.licdn.com/dms/image/D5612AQGjikICNeJJ_A/article-cover_image-shrink_720_1280/0/1660154122832?e=2147483647&v=beta&t=_4o7cyhCMTWni7iZ8DvS5pJ85B4huEtKN6vXz-DDuds" className="card-img-top" alt="Mind and Body" />
                    <div className="card-body">
                      <h5 className="card-title">Mind and Body</h5>
                      <p className="card-text">3. Create a job-winning Resumé with Alison’s Resumé Builder and apply for your dream job .</p>
                      <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <section class="services py-md-5 py-4" id="services">
              <div class="container py-md-5 py-4">
                <div class="divider-shape"></div>
                <h2>Services</h2>
                <p>This is the services section</p>
                <div class="row mt-4">
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">Digital Marketing</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">Social Media</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">SEO</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">Paid Advertisement</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">Email Marketing</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">Conversion optimization</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">Reputation Management</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">Influencer Marketing</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card shadow-sm">
                      <div class="card-body d-flex justify-content-between">
                        <h4 class="card-title">Facebook Marketing</h4>
                        <i class="ri-arrow-right-line fs-4"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </div>
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
}

export default HomePage;
