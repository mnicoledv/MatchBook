import React, {useState} from 'react'
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../services/appApi";
import axios from "../axios";

import '../pages/NewProduct.css';

function NewProduct(){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const navigate = useNavigate();
    const [createProduct, { isError, error, isLoading, isSuccess }] = useCreateProductMutation();
    

    function handleRemoveImg(imgObj) {
        setImgToRemove(imgObj.public_id);
        axios
            .delete(`/images/${imgObj.public_id}/`)
            .then((res) => {
                setImgToRemove(null);
                setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
            })
            .catch((e) => console.log(e));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !description || !price || !category || !images.length) {
            return alert("Please fill out all the fields");
        }
        createProduct({ name, description, price, category, images }).then(({data}) => {
            if (data.length > 0) {
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
        });
    }

    function showWidget() {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: "dmaobf260",
                uploadPreset: "matchbook",
            },
            (error, result) => {
                if (!error && result.event === "success") {
                    setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
                }
            }
        );
        widget.open();
    }

    return (
        <Container>
            <Row>
                <Col md={12} className="new-product__form--container">
                    <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <h1 className="mt-4">Add new product</h1>

                        {isSuccess && <Alert variant="success">Added Successfully</Alert>}

                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" value={name} required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control as="textarea" placeholder="Product description" style={{ height: "100px" }} value={description} required onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price(Php)</Form.Label>
                            <Form.Control type="number" placeholder="Price ($)" value={price} required onChange={(e) => setPrice(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" onChange={(e) => setCategory(e.target.value)}>

                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option disabled selected>
                                    -- Select One --
                                </option>
                                <option value="Match-Book">Match-Book</option>
                                <option value="Children's">Children's</option>
                                <option value="Fiction/Non-Fiction">Fiction/Non-Fiction</option>
                                <option value="Graphic Novel & Manga">Graphic Novel & Manga</option>
                                <option value="Arts & Design">Arts & Design</option>
                                <option value="School & Art Supplies">School & Art Supplies</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Button variant="outline-dark" onClick={showWidget}>
                                Upload Images
                            </Button>

                            <div className="images-preview-container">

                                {images.map((image) => (
                                    <div className="image-preview">
                                        <img src={image.url} alt="" />
                                        {imgToRemove !== image.public_id && <i className= "fa fa-times-circle" onClick={() => handleRemoveImg(image)}></i>}
                                    </div>
                                ))}

                            </div>

                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" variant="outline-dark" disabled={isLoading || isSuccess}>
                                Add
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
        
}
        
export default NewProduct;