import React, {Component} from 'react';
import WalletView from "./Wallet.view";
import WalletModel from "./Wallet.model";
import RecentTransactionService from "../../service/RecentTransactionService";
import dateTimeFormatter from "../utils/dateTimeFormatter";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions:[]
        }
    }

    setWallet = (response) => {
        /* istanbul ignore next */
        this.setState({
            name: response.data.name,
            balance: response.data.balance,
            phoneNumber: response.data.phoneNumber
        })
    };
    onAddMoney = () => {
        /* istanbul ignore next */
        this.componentDidMount();
    };
    componentDidMount = () => {
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
                                    amount: transaction.amount,
                                    createdAt: dateTimeFormatter(transaction.createdAt)
                                }
                            })
                        })
                    })
            })
            .catch(error => {
                console.log(error);
            })
    };

    render() {
        return (
            <WalletView name={this.state.name}
                        phoneNumber={this.state.phoneNumber}
                        balance={this.state.balance}
                        onAddMoney={this.onAddMoney}
                        transactions={this.state.transactions}
            />
        );
    }
}

export default Wallet;




