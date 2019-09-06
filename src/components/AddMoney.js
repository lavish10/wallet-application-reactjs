import React, {Component} from 'react';
import axios from "axios";
import Wallet from "./Wallet";

class AddMoney extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            amount: ''
        }
    }

    handleOnChange = (event) => {
        if (!event.target.value){
            return;
        }
        this.setState({
            amount: parseFloat(event.target.value),
            status: ''
        })
    };

    handleOnclick = () => {
        if (!this.state.amount){
            return;
        }
        const data = {type: 'CREDIT', amount: this.state.amount}
        axios.post('/api/wallets/' + this.props.id + '/transactions', data)
            .then(response => {
                this.setState({
                    amount: '',
                    status: 'You have successfully add ' + response.data.amount + ' in your wallet'
                })
                this.props.onAddMoney();
                setTimeout(()=>{
                    this.setState({
                        amount: '',
                        status:''
                    })
                    this.props.changeDisplay()
                },2000);
            })
            .catch(error => {
                this.setState({
                    status: error
                })
            })
    };

    render() {
        return (
            <div>
                Amount: <input type={"number"} value={this.state.amount} onChange={this.handleOnChange}/><br/>
                <button className="button" onClick={this.handleOnclick}>Add Money</button>
                <label>{this.state.status}</label>
            </div>
        );
    }
}

export default AddMoney;