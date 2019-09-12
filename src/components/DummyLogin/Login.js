import React, {Component} from 'react';
import Wallet from "../Wallet/Wallet";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Transactions from "../Transactions/Transactions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            loggedIn: false,
            currentPage: 'home'
        }
    }

    handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        this.setState({
            [name]: target.value
        })
    };

    handleLogin = () => {
        this.setState({
            loggedIn: true
        });
    };
    renderWallet = () => {
        if (this.state.loggedIn) {
            return (
                <Router>
                    <Switch>
                        <Route path={"/"} exact component={() => <Wallet id={this.state.id}/>}/>
                        <Route path={"/transactions"}
                               component={() => <Transactions walletId={this.state.id}/>}/>
                    </Switch>
                </Router>
            );
        }
    };

    render() {
        return (
            <div>
                <div style={{display: this.state.loggedIn ? 'none' : 'block'}}>
                    <input type="text" value={this.state.id} name="id" onChange={this.handleChange}/>
                    <br/>
                    <button onClick={this.handleLogin}>Login</button>
                </div>
                <div>
                    {this.renderWallet()}
                </div>
            </div>
        );
    }
}

export default Login;