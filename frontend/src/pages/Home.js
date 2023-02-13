import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import banner from "../images/banner.png";
import banner1 from "../images/banner1.png";
import bannerbook from "../images/bannerbook.jpg";
import bannerpen from "../images/bannerpen.jpg";
import bannerbm from "../images/bannerbm.jpg";
import bannerbrush from "../images/bannerbrush.jpg";
import bestseller1 from "../images/bestseller1.jpg";
import bestseller2 from "../images/bestseller2.jpg";
import bestseller3 from "../images/bestseller3.jpg";
import bestseller4 from "../images/bestseller4.jpg";
import bestseller5 from "../images/bestseller5.jpg";
import bestseller6 from "../images/bestseller6.jpg";
import bestseller7 from "../images/bestseller7.jpg";
import bestseller8 from "../images/bestseller8.jpg";
import bestseller9 from "../images/bestseller9.jpg";

import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import "../pages/Home.css";


function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);

    return(
        // BANNER
        <section className="banner">

            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 p-0">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner}
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="col-lg-6">
                
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="categories_item">
                        <img
                        className="d-block w-100" style={{ width: 500, height: 275 }}
                        src={bannerbook}
                        alt="First slide"
                        />
                    </div>
                    </div>
                    
                    <div className="lg-6 col-md-6 col-12 p-0">
                    <div className="categories_item">
                        <img className="d-block w-100 h-900" style={{ width: 500, height: 275 }} 
                        src={bannerpen} alt="First slide"
                        />
                    </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="categories_item">
                        <img className="d-block w-100 h-900" style={{ width: 500, height: 250 }}
                        src={bannerbm} alt="First slide"
                        />
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                    <div className="categories_item">
                        <img className="d-block w-100 h-900" style={{ width: 500, height: 250 }}
                        src={bannerbrush} alt="First slide"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="recent-products-container container mt-4">
            <h1 className="text-center fw-bold display-2 mt-5">Categories</h1>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>

            {/* BEST SELLERS */}    

            <h1 className="text-center fw-bold display-2 mt-5">Best Sellers</h1>

            <div className="best-sellers">
            <Carousel>
                <Carousel.Item>
                    <div className="cards-wrapper mt-5">
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" style={{ height: 350 }} src={bestseller1} />
                            <Card.Body>
                                <Card.Title>Jujutsu Kaisen, Vol. 14(Paperback)</Card.Title>
                                    <Card.Subtitle>
                                        Gege Akutami
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 569.00
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: 350 }}src={bestseller2} />
                            <Card.Body>
                                <Card.Title>Harry Potter
                      (Paperback)</Card.Title>
                                    <Card.Subtitle>
                                        JK Rowling
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 599.00
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: 350 }} src={bestseller3} />
                            <Card.Body>
                                <Card.Title>The School for Good & Evil (Paperback)</Card.Title>
                                    <Card.Subtitle>
                                    Leigh Bardugo
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 719.00
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                <div className="cards-wrapper mt-5">
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: 350 }} src={bestseller4} />
                            <Card.Body>
                                <Card.Title>Eleonor & Park (Paperback)</Card.Title>
                                    <Card.Subtitle>
                                    Rainbow Powell
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 599.00
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: 350 }} src={bestseller5} />
                            <Card.Body>
                                <Card.Title>They Both Die at the End (Paperback)</Card.Title>
                                    <Card.Subtitle>
                                        Adam Silvera
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 650.00
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: 350 }} src={bestseller6} />
                            <Card.Body>
                                <Card.Title>The Little Prince (Paperback)</Card.Title>
                                    <Card.Subtitle>
                                        Antoine de Saint-Exupery
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 599.00
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="cards-wrapper mt-5">
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: 350 }} src={bestseller7} />
                            <Card.Body>
                                <Card.Title>The Subtle Art of Not Giving... (Paperback)</Card.Title>
                                    <Card.Subtitle>
                                        Mark Manson
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 884.00
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: 350 }} src={bestseller8} />
                            <Card.Body>
                                <Card.Title>You're That Bitch: & Other... (Hardcover)</Card.Title>
                                    <Card.Subtitle>
                                        Bretnan Rock
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 1,538.10
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{ height: 350 }} src={bestseller9} />
                            <Card.Body>
                                <Card.Title>Alice in Borderland, Vol.3 (Paperback)</Card.Title>
                                    <Card.Subtitle>
                                        Haro Aso
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Php 1,139.00
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="outline-dark">Add to Cart</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>

            {/* LATEST PRODUCTS */}
                <div className="featured-products-container container mt-4">
                <h1 className="text-center fw-bold display-2 mt-5">Latest Books Release</h1>

                    <div className="d-flex justify-content-center flex-wrap mt-5" style={{ height: 250 }}>
                        {lastProducts.map((product) => (
                            <ProductPreview {...product} />
                        ))}
                    </div>

                    <div>
                        <Link to="/category/all" style={{ textAlign: "right", display: "block", textDecoration: "none" }}>
                            See more {">>"}
                        </Link>   
                    </div>
                </div>

        </section>
    )
}

export default Home;