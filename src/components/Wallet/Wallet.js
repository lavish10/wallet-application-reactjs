import React, {Component} from 'react';
import WalletView from "./Wallet.view";
import WalletModel from "./Wallet.model";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    setWallet = (response) => {
        /* istanbul ignore next */
        this.setState({
            id: response.data.id,
            name: response.data.name,
            balance: response.data.balance,
            phoneNumber: response.data.phoneNumber
        })
    };
    onUpdateBalance = () => {
        /* istanbul ignore next */
        this.componentDidMount();
    };
    componentDidMount = () => {
        WalletModel.get(this.props.id)
            .then(this.setWallet)
            .catch(function (error) {
            })
    };

    render() {
        return (
            <WalletView name={this.state.name}
                        walletId={this.state.id}
                        phoneNumber={this.state.phoneNumber}
                        balance={this.state.balance}
                        onUpdateBalance={this.onUpdateBalance}
            />
        );
    }
}

export default Wallet;




