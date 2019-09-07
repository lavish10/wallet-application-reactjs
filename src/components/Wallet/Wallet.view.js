import React, {Component} from 'react';
import Header from "../Header";
import AddMoney from "../AddMoney/AddMoney";
import SendMoney from "../SendMoney/SendMoney";

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
            <SendMoney id={this.props.id}
                       changeDisplay={this.handleClickAddMoney}
                       onAddMoney={this.props.onAddMoney}
            />
        );
    };
    renderAddMoney = () => {
        if (!this.state.displayAddMoney) {
            return;
        }
        return (
            <AddMoney id={this.props.phoneNumber}
                      changeDisplay={this.handleClickAddMoney}
                      onAddMoney={this.props.onAddMoney}
            />
        );
    };

    render() {
        return (
            <div>
                <Header name={this.props.name}/>
                <div className={'container'} style={{marginTop: '100px'}}>
                    <div id={'balance'} style={{textAlign: 'center', display: 'block'}}
                         className="container">
                        <h2>Balance : ₹ {this.props.balance}</h2>
                        <div>
                            <button id={'addMoneyBtn'} className={'button'} onClick={this.handleClickAddMoney}>Add Money
                            </button>
                            <button id={'sendMoneyBtn'} className={'button'} onClick={this.handleClickSendMoney}>Send
                                Money
                            </button>
                        </div>
                    </div>
                    <div style={{textAlign: 'center', margin: '0 auto', width: '70%', display: 'block'}}>
                        {this.renderAddMoney()}
                        {this.renderSendMoney()}
                    </div>

                </div>
            </div>
        );
    }

}

export default WalletView;
