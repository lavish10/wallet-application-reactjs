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
                <div className={'container'} style={{marginTop:'100px'}}>
                    <div style={{textAlign: 'center', display: this.state.display ? 'block' : 'none'}}
                         className="container">
                        <h2>Balance : ₹ {this.props.balance}</h2>
                        <div>
                            <button id={'b1'} className={'button'} onClick={this.handleClick}>Add Money</button>
                        </div>
                    </div>
                    <div style={{textAlign: 'center', display: this.state.display ? 'none' : 'block'}} >
                        <AddMoney id={this.props.phoneNumber}
                                  changeDisplay={this.handleClick}
                                  onAddMoney={this.props.onAddMoney}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default WalletView;
