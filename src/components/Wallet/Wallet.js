import React, {Component} from 'react';
import WalletView from "./Wallet.view";
import WalletModel from "./Wallet.model";
import RecentTransactionService from "../../service/RecentTransactionService";
import dateTimeFormatter from "../utils/dateTimeFormatter";
import Header from "../Header";

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            transactionsLoaded: false
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
        WalletModel.get(this.props.id)
            .then(this.setWallet)
            .then(() => {
                /* istanbul ignore next */
                RecentTransactionService.get(this.props.id)
                    .then(data => {
                        /* istanbul ignore next */
                        this.setState({
                            transactions: data.splice(data.length - 7).reverse().map(transaction => {
                                /* istanbul ignore next */
                                return {
                                    id: transaction.id,
                                    remarks: !transaction.remarks ? "" : transaction.remarks,
                                    type: transaction.type,
                                    amount: parseFloat(transaction.amount).toLocaleString('en-IN', {
                                        style: 'currency',
                                        currency: 'INR'
                                    }).slice(0, -3),
                                    createdAt: dateTimeFormatter(transaction.createdAt)
                                }
                            }),
                            transactionsLoaded: true
                        })
                    })
            })
            .catch(error => {
                //console.log(error);
            })
    };

    render() {
        return (
            <React.Fragment>

                <Header name={this.state.name} currentPage="home"/>
                <WalletView name={this.state.name}
                            walletId={this.state.id}
                            phoneNumber={this.state.phoneNumber}
                            balance={this.state.balance}
                            transactions={this.state.transactions}
                            transactionsLoaded={this.state.transactionsLoaded}
                            onUpdateBalance={this.onUpdateBalance}/>
            </React.Fragment>
        );
    }
}

export default Wallet;




