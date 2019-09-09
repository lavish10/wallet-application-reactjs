import React, {Component} from 'react';
import RecentTransactionsView from "./RecentTransactions.view";

class RecentTransactions extends Component {
    render() {
        return (
            <div>
                {
                    this.props.transactions.length > 0
                        ? <RecentTransactionsView transactions={this.props.transactions}/>
                        : <label>No recent transactions</label>
                }
            </div>
        );
    }
}

export default RecentTransactions;

