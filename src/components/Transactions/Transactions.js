import React, {Component} from 'react';
import DateFilter from "../Wallet/DateFilter";
import Header from "../Header";
import WalletModel from "../Wallet/Wallet.model";

class Transactions extends Component {
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
    componentDidMount = () => {
        WalletModel.get(this.props.walletId)
            .then(this.setWallet);
    };

    render() {
        return (
            <React.Fragment>
                <Header name={this.state.name} currentPage="transactions"/>
                <div className={'container'} style={{marginTop: '100px'}}>
                    <DateFilter balance={this.state.balance} id={this.state.id}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Transactions;