import React, {Component} from 'react';
import RecentTransactionService from "../../service/RecentTransactionService";
import RecentTransactionsView from "./RecentTransactions.view";
import dateTimeFormatter from "../utils/dateTimeFormatter";

class RecentTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    componentDidMount() {
        RecentTransactionService.get(this.props.id)
            .then(data => {
                this.setState({
                    transactions: data.map(transaction => {
                        return {
                            remarks: !transaction.remarks?"Self":transaction.remarks,
                            type: transaction.type,
                            amount: transaction.amount,
                            createdAt: dateTimeFormatter(transaction.createdAt)
                        }
                    })
                })
            })
    }

    renderTransaction = () => {
        return this.state.transactions.length > 0
            ? <RecentTransactionsView rows={this.state.transactions}/>
            : <label>No recent transactions</label>
    };

    render() {
        return (
            <div>
                {this.renderTransaction()}
            </div>
        );
    }
}

export default RecentTransactions;

