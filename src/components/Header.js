import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleClickNavBar = (event) => {
        this.props.handleChangeNavBar(event.target.name);
    };

    render() {
        return (
            <div>
                <div>
                    <div>
                        <Navbar bg="dark" variant="dark" fixed="top">
                            <Navbar.Brand href="">Wallet</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Link name='home'
                                      className={this.props.currentPage === 'home' ? 'nav-link active' : 'nav-link'}
                                      onClick={this.handleClickNavBar}
                                      to={"/"}>Home</Link>
                                <Link name='transactions'
                                      className={this.props.currentPage === 'transactions' ? 'nav-link active' : 'nav-link'}
                                      onClick={this.handleClickNavBar}
                                      to={"/transactions"}>Transactions</Link>
                            </Nav>
                            <Nav>
                                <Nav.Link>{this.props.name}</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;