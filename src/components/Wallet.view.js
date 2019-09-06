import React, {Component} from 'react';
import Header from "./Header";
import AddMoney from "./AddMoney";

class WalletView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            display: true
        }
    }

    render() {
        return (
            <div>
                <Header name={this.props.name}/>
                <div className={'container'} style={{marginTop: '100px'}}>
                    <div className="container">
                        <h2>Balance : ₹ {this.props.balance}</h2>
                        <div>
                            <button id={'b1'} className={'button'}>Add Money</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default WalletView;
