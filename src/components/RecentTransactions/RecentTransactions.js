import React, {Component} from 'react';
import RecentTransactionsView from "./RecentTransactions.view";

class RecentTransactions extends Component {
    constructor(props) {
        super(props);
    }

    renderTransaction = () => {
        return this.props.transactions.length > 0
            ? <RecentTransactionsView transactions={this.props.transactions}/>
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

