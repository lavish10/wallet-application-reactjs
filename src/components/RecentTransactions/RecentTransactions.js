import React, {Component} from 'react';
import RecentTransactionsView from "./RecentTransactions.view";

class RecentTransactions extends Component {
    render() {
        return (
            <div>{
                this.props.transactionsLoaded ? this.props.transactions.length > 0
                    ? <RecentTransactionsView transactions={this.props.transactions}/> :
                    "No recent transactions" :
                    "Loading..."

            }
            </div>
        );
    }
}

export default RecentTransactions;

