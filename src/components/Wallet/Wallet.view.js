import React, {Component} from 'react';
import Header from "../Header";
import AddMoney from "../AddMoney/AddMoney";
import SendMoney from "../SendMoney/SendMoney";

class WalletView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            display: true,
            displaySendMoney: false
        }
    }

    handleClick = () => {
        this.setState({
            display: !this.state.display
        })
    };
    handleClickSamePage = () => {
        this.setState({
            displaySendMoney: !this.state.displaySendMoney
        });
    };

    renderSendMoney = () => {
        if (!this.state.displaySendMoney) {
            return;
        }
        return (
            <SendMoney id={this.props.id}
                       changeDisplay={this.handleClick}
                       onAddMoney={this.props.onAddMoney}
            />
        );
    };

    render() {
        return (
            <div>
                <Header name={this.props.name}/>
                <div className={'container'} style={{marginTop: '100px'}}>
                    <div id={'balance'} style={{textAlign: 'center', display: this.state.display ? 'block' : 'none'}}
                         className="container">
                        <h2>Balance : ₹ {this.props.balance}</h2>
                        <div>
                            <button id={'b1'} className={'button'} onClick={this.handleClick}>Add Money</button>
                            <button id={'sendMoneyBtn'} className={'button'} onClick={this.handleClickSamePage}>Send
                                Money
                            </button>
                        </div>
                    </div>
                    <div style={{textAlign: 'center', display: this.state.display ? 'none' : 'block'}} >
                        <AddMoney id={this.props.phoneNumber}
                                  changeDisplay={this.handleClick}
                                  onAddMoney={this.props.onAddMoney}
                        />
                    </div>
                    {this.renderSendMoney()}

                </div>
            </div>
        );
    }

}

export default WalletView;
