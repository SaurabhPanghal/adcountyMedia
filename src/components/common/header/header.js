import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from '../../services/context';

function Header() {
    let { signOut } = useContext(AuthContext);
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Adcounty Media</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto d-flex align-items-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Button variant="outline-primary" onClick={() => signOut()}>Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;