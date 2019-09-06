import React, {Component} from 'react';
import axios from "axios";
import WalletView from "./Wallet.view";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    setWallet = (response)=>{
        this.setState({
            name: response.data.name,
            balance: response.data.balance,
            phoneNumber: response.data.phoneNumber
        })
    }
    onAddMoney = ()=>{
        this.componentDidMount();
    }
    componentDidMount = () => {
        axios.get('/api/wallets/' + this.props.id)
            .then(this.setWallet)
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <WalletView name={this.state.name}
                        phoneNumber={this.state.phoneNumber}
                        balance={this.state.balance}
                        onAddMoney={this.onAddMoney}
            />
        );
    }
}

export default Wallet;




