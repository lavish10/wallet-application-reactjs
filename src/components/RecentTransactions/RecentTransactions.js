import React, {Component} from 'react';
import RecentTransactionsView from "./RecentTransactions.view";
import {Card} from "react-bootstrap";

class RecentTransactions extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.transactionsLoaded ? this.props.transactions.length > 0
                        ? <Card>
                            <Card.Header> Recent Transactions</Card.Header>
                            <Card.Body>
                                <RecentTransactionsView transactions={this.props.transactions}/>
                            </Card.Body>
                        </Card>
                        :
                        <label>No recent transactions</label> :
                        "Loading..."

                }


            </React.Fragment>
        );
    }
}

export default RecentTransactions;

