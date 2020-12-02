import React from "react";
import { Nav } from 'react-bootstrap';
import "./navigation.scss";
import {Link} from "react-router-dom";


function Navigation() {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                {/* <Nav.Link to="/" exact>Pradinis-paieška</Nav.Link> */}
                <Link to="/" className="nav-link" role="button">Pradinis-paieška</Link>
            </Nav.Item>
            <Nav.Item>
                {/* <Nav.Link eventKey="link-1">Išsaugoti domenai</Nav.Link> */}
                <Link to="/domenulist/" data-rb-event-key="link-1" className="nav-link" role="button">Išsaugoti domenai</Link>
            </Nav.Item>
            <Nav.Item>
                {/* <Nav.Link to="/about/" eventKey="link-2">Apie projektą</Nav.Link> */}
                <Link to="/about/" data-rb-event-key="link-2" className="nav-link" role="button">Apie projektą</Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;