import React, {Component} from 'react';
import Wallet from "../Wallet/Wallet";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            loggedIn: false
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
            return <Wallet id={this.state.id}/>;
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