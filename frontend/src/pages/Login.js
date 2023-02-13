import React, { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../services/appApi";

import "../pages/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isLoading, error }] = useLoginMutation();
    function handleLogin(e) {
        e.preventDefault();
        login({ email, password });
    }
    return (
        <Container fluid>
            
                <div className="login__form--container">
                    <Form onSubmit={handleLogin}>
                        <h1 className="text-center fw-bold display-2 mt-5">Login</h1>
                        {isError && <Alert variant="danger">{error.data}</Alert>}
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Button type="submit" disabled={isLoading}>
                                Login
                            </Button>
                        </Form.Group>

                        <p className="pt-3 text-center">
                            Don't have an account? <Link to="/signup">Create account</Link>{" "}
                        </p>
                    </Form>
                </div>
            
        </Container>
    );
}

export default Login;