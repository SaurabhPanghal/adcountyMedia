import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../services/context';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    let { signIn } = useContext(AuthContext);

    const validate = (e) => {
        e.preventDefault();
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(email) == false) {
            alert("Please enter valid email address.")
        } else if (password.length < 8) {
            alert("Please enter 8 digit password.")
        } else {
            alert("You have successfully logged in.");
            signIn();
            navigate("/home");
        }
    }

    return (
        <div className='main'>
            <h1>Adcounty Media</h1>
            <Form border="primary" className='col-md-3'>
                <span className='heading'>Login</span>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember next time" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={validate}>
                    Submit
                </Button>
            </Form>
        </div>
    )
};
