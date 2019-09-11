import React, {Component} from 'react';
import AddMoney from "../AddMoney/AddMoney";
import SendMoney from "../SendMoney/SendMoney";
import RecentTransactions from "../RecentTransactions/RecentTransactions";

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
                        <h2>Balance : ₹ {this.props.balance}</h2>
                        <div style={{marginBottom: '2em'}}>
                            <button id={'addMoneyBtn'} className={'button'} onClick={this.handleClickAddMoney}>Add Money
                            </button>
                            <button id={'sendMoneyBtn'} className={'button'} onClick={this.handleClickSendMoney}>Send
                                Money
                            </button>
                        </div>
                    </div>
                    <div style={{margin: '0 auto', width: '70%', display: 'block'}}>
                        {this.renderAddMoney()}
                        {this.renderSendMoney()}
                        <div>
                            <RecentTransactions transactions={this.props.transactions}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default WalletView;
