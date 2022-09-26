import logo from '../../assets/logo-zombificate.png';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget/CartWidget';
import './navBar.css';
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav><Link className='linksTo' to="/">Home</Link></Nav>
                    <Nav><Link className='linksTo' to="/categoria/juegos-de-mesa">Juegos de Zombies</Link></Nav>
                    </Nav>
                    <Link to="/carrito"><CartWidget/></Link>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;