import React, {Component} from 'react';
import RecentTransactionsView from "./RecentTransactions.view";

class RecentTransactions extends Component {
    render() {
        return (
            <div align={'center'}>{
                this.props.transactionsLoaded ? this.props.transactions.length > 0
                    ? <RecentTransactionsView transactions={this.props.transactions}/> :
                    <label>No recent transactions</label> :
                    "Loading..."

            }
            </div>
        );
    }
}

export default RecentTransactions;

