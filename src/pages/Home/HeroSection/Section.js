import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import pic1 from '../../../assets/images/home/pair1.svg'

const Section = (props) => {
    return (
        <React.Fragment>
            <section className="section hero-section bg-ico-hero" id="home">
                <div className="bg-overlay bg-primary"></div>
                <Container>
                    <Row className="align-items-center">
                        <Col lg="7">
                            <div className="text-white-50">
                                <h1 className="text-white font-weight-semibold mb-3 hero-title">Online therapy with an experienced therapist</h1>
                                <p className="font-size-14">
                                    We all have thoughts and behaviors that hold us back. With WebTherapy online therapy, you’ll learn to discover and
                                    overcome these hurdles with the support of a licensed counselor.
                                </p>

                                <div className="button-items mt-4">
                                    <Link to="/find-therapists" className="btn btn-success mr-1">
                                        Search Now
                                    </Link>
                                    <a href="#features" className="btn btn-light">
                                        How it works
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="5" md="8" sm="10" className="text-right ">
                            <div>
                                <img src={pic1} alt="" className="img-fluid mx-auto d-block" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Section
