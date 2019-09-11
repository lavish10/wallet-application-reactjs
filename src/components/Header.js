import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Navbar bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand href="">Wallet</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link className={"nav-link"} to={"/"}>Home</Link>
                            <Link className={"nav-link"}
                                  to={"/transactions"}>Transactions</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>{props.name}</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;