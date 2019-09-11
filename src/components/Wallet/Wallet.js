import React, {Component} from 'react';
import WalletView from "./Wallet.view";
import WalletModel from "./Wallet.model";
import RecentTransactionService from "../../service/RecentTransactionService";
import dateTimeFormatter from "../utils/dateTimeFormatter";
import Header from "../Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Transactions from "../Transactions/Transactions";

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
                /* istanbul ignore next */
                RecentTransactionService.get(this.props.id)
                    .then(data => {
                        /* istanbul ignore next */
                        this.setState({
                            transactions: data.splice(data.length - 7).map(transaction => {
                                /* istanbul ignore next */
                                return {
                                    id: transaction.id,
                                    remarks: !transaction.remarks ? "Self" : transaction.remarks,
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
            <div>
                <Router>
                    <Header name={this.state.name}/>
                    <Switch>
                        <Route path={"/"} exact component={() => <WalletView name={this.state.name}
                                                                             walletId={this.state.id}
                                                                             phoneNumber={this.state.phoneNumber}
                                                                             balance={this.state.balance}
                                                                             transactions={this.state.transactions}
                                                                             onUpdateBalance={this.onUpdateBalance}/>}/>
                        <Route path={"/transactions"} component={Transactions}/>

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Wallet;




