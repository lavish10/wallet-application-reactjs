import React, {Component} from 'react';
import AddMoney from "../AddMoney/AddMoney";
import SendMoney from "../SendMoney/SendMoney";
import RecentTransactions from "../RecentTransactions/RecentTransactions";
import DateFilter from "./DateFilter";
import {Button} from "react-bootstrap";

class WalletView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            displayAddMoney: false,
            displaySendMoney: false
        }
    }

    handleClickAddMoney = () => {
        this.setState({
            displayAddMoney: !this.state.displayAddMoney,
            displaySendMoney: false
        })
    };
    handleClickSendMoney = () => {
        this.setState({
            displaySendMoney: !this.state.displaySendMoney,
            displayAddMoney: false
        });
    };

    renderSendMoney = () => {
        if (!this.state.displaySendMoney) {
            return;
        }
        return (
            <SendMoney id={this.props.walletId}
                       changeDisplay={this.handleClickSendMoney}
                       onSendMoney={this.props.onUpdateBalance}
            />
        );
    };
    renderAddMoney = () => {
        if (!this.state.displayAddMoney) {
            return;
        }
        return (
            <AddMoney id={this.props.walletId}
                      changeDisplay={this.handleClickAddMoney}
                      onAddMoney={this.props.onUpdateBalance}
            />
        );
    };

    render() {
        return (
            <div>
                <div className={'container'} style={{marginTop: '100px'}}>
                    <div id={'balance'} style={{textAlign: 'center', display: 'block'}}
                         className="container">
                        <h2>Balance : {(!isNaN(parseFloat(this.props.balance)))
                            ? parseFloat(this.props.balance).toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR'
                            }) :
                            'Loading'}</h2>
                        <div style={{marginBottom: '2em'}}>
                            <Button active={this.state.displayAddMoney} id={'addMoneyBtn'} variant="success"
                                    onClick={this.handleClickAddMoney}>Add Money
                            </Button>
                            <Button active={this.state.displaySendMoney} id={'sendMoneyBtn'} variant="success"
                                    onClick={this.handleClickSendMoney}>Send
                                Money
                            </Button>
                        </div>
                    </div>
                    <div style={{margin: '0 auto', width: '70%', display: 'block'}}>
                        {this.renderAddMoney()}
                        {this.renderSendMoney()}
                        <br/><br/>
                        <div>
                            <RecentTransactions transactions={this.props.transactions}
                                                transactionsLoaded={this.props.transactionsLoaded}/>
                        </div>
                    </div>
                </div>
                <DateFilter id={this.props.walletId}/>
            </div>
        );
    }

}

export default WalletView;
