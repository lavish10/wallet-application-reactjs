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
    handleClick = () => {
        this.setState({
            display: !this.state.display
        })
    }
    render() {
        return (
            <div>
                <Header name={this.props.name}/>
                <div className={'container'} style={{marginTop: '100px'}}>
                    <div id={'balance'} style={{textAlign: 'center', display: this.state.display ? 'block' : 'none'}} className="container">
                        <h2>Balance : ₹ {this.props.balance}</h2>
                        <div>
                            <button id={'b1'} className={'button'} onClick={this.handleClick}>Add Money</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default WalletView;
