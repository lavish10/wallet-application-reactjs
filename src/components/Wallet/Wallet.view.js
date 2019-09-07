import React, {Component} from 'react';
import Header from "../Header";
import AddMoney from "../AddMoney/AddMoney";
import RecentTransactions from "../RecentTransactions/RecentTransactions";

class WalletView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            display: true
        }
    }

    handleClick = () => {
        this.setState({
            display: !this.state.display
        })
    };

    renderRecentTransaction = () => {
        if (this.props.phoneNumber) {
            return <RecentTransactions id={this.props.phoneNumber}/>
        }

    }

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
                        </div>
                    </div>
                    <div style={{textAlign: 'center', display: this.state.display ? 'none' : 'block'}}>
                        <AddMoney id={this.props.phoneNumber}
                                  changeDisplay={this.handleClick}
                                  onAddMoney={this.props.onAddMoney}
                        />
                    </div>
                    <div>
                        {this.renderRecentTransaction()}
                    </div>
                </div>
            </div>
        );
    }
}

export default WalletView;
