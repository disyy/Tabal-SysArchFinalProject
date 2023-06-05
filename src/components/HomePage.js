import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../components/jumbotron.css';

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
        <div className="landing-page">
          <header className="jumbotron">
            <div className="container">
              <h1>Master New Skills<br />as a Single Parent</h1>
              <p>Join our online training courses and enhance your skills while balancing your responsibilities as a single parent.</p>
              <a href="/Explore" className="btn btn-primary btn-lg">Explore Courses</a>
            </div>
          </header>

          <section id="courses" className="container">
            <h2>Featured Courses</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src="https://whatfix.com/blog/wp-content/uploads/2022/12/digital-transformation-3.png" className="card-img-top" alt="Course 1" />
                  <div className="card-body">
                    <h5 className="card-title">DISCOVER</h5>
                    <p className="card-text">Discover your strengths with Skill's Mastery Workplace Personality Assessment</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="https://thehubbackend.com/media/36694-How-to-Choose-a-Career-Path_.jpg" className="card-img-top" alt="Course 2" />
                  <div className="card-body">
                    <h5 className="card-title">EXPLORE</h5>
                    <p className="card-text">Find your perfect career. Explore 850+ career paths with related courses </p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="https://www.corporatecomplianceinsights.com/wp-content/uploads/2021/04/shutterstock_700543810-750x536-1.jpeg" className="card-img-top" alt="Course 3" />
                  <div className="card-body">
                    <h5 className="card-title">APPLY</h5>
                    <p className="card-text">Create a job-winning Resumé with Skill's Mastery Resumé Builder and apply for your dream job .</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container">
            <h2>About Us</h2>
            <p>
            Welcome to our website! We are dedicated to providing a free online course specifically designed for
             single parents. Our course aims to support and empower single parents by offering valuable resources, practical tips, 
             and expert guidance to help navigate the unique challenges of single parenting. From time management and 
             communication skills to self-care and goal setting, our course covers a wide range of topics to enhance personal and professional growth. Join us today and take advantage 
            of this opportunity to invest in yourself and build a brighter future as a single parent.</p>
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
      </div>
    );
  }
}

export default HomePage;
