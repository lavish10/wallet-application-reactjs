import React, {Component} from 'react';
import WalletView from "./Wallet.view";
import WalletModel from "./Wallet.model";
import RecentTransactionService from "../../service/RecentTransactionService";
import dateTimeFormatter from "../utils/dateTimeFormatter";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
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
        this.getWallet();
    };

    getWallet() {
        WalletModel.get(this.props.id)
            .then(this.setWallet)
            .then(() => {
                RecentTransactionService.get(this.props.id)
                    .then(data => {
                        this.setState({
                            transactions: data.map(transaction => {
                                return {
                                    id: transaction.id,
                                    remarks: !transaction.remarks ? "Self Transaction of crediting money from my bank account to my wallet and also use for various purpose of shopping, movie, snacks" : transaction.remarks,
                                    type: transaction.type,
                                    amount: parseFloat(transaction.amount).toFixed(2),
                                    createdAt: dateTimeFormatter(transaction.createdAt)
                                }
                            })
                        })
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <WalletView name={this.state.name}
                        walletId={this.state.id}
                        phoneNumber={this.state.phoneNumber}
                        balance={this.state.balance}
                        transactions={this.state.transactions}
                        onUpdateBalance={this.onUpdateBalance}
            />
        );
    }
}

export default Wallet;




