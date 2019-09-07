import React, {Component} from 'react';
import WalletView from "./Wallet.view";
import WalletModel from "./Wallet.model";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    setWallet = (response) => {
        this.setState({
            name: response.data.name,
            balance: response.data.balance,
            phoneNumber: response.data.phoneNumber
        })
    };
    onAddMoney = () => {
        console.log('add moey')
        this.getWallet();
    };
    componentDidMount = () => {
        this.getWallet();
    };

    getWallet() {
        WalletModel.get(this.props.id)
            .then(this.setWallet)
            .catch(function (error) {
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




