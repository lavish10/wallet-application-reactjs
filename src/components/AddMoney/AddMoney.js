import React, {Component} from 'react';
import addMoneyService from "../../service/AddMoneyService";

class AddMoney extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            amount: ''
        }
    }

    handleOnChange = (event) => {
        if (!event.target.value) {
            return;
        }
        this.setState({
            amount: parseFloat(event.target.value),
            status: ''
        })
    };

    handleOnclick = () => {
        if (!this.state.amount) {
            return;
        }
        const data = {type: 'CREDIT', amount: this.state.amount};
        addMoneyService.post(this.props.id, data)
            .then((response) => {
                this.setState({
                    amount: '',
                    status: 'You have successfully add ' + response.amount + ' in your wallet'
                });
                this.props.onAddMoney();
                setTimeout(() => {
                    this.extracted();
                }, 2000)
            }).catch(error => {
            this.setState({
                status: error
            })
        })
    };

    extracted() {
        this.setState({
            amount: '',
            status: ''
        });
        this.props.changeDisplay()
    }

    render() {
        return (
            <div>
                <h2>Add Money</h2>
                Amount: <input min={50} max={50000} type={"number"} value={this.state.amount} onChange={this.handleOnChange}/><br/>
                <button className="button" onClick={this.handleOnclick}>Add Money</button>
                <label>{this.state.status}</label>
            </div>
        );
    }
}

export default AddMoney;