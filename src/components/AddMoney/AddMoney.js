import React, {Component} from 'react';
import addMoneyService from "../../service/AddMoneyService";
import './AddMoney.css';

class AddMoney extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            amount: '',
            errorstatus: ''
        }
    }

    handleOnChange = (event) => {
        let status = '';
        if (event.target.value < 50) {
            status = 'Amount must be greater or equal to 50';
        } else if (event.target.value > 50000) {
            status = 'Amount must be less than or equal to 50000';
        } else if (event.target.value % 50 !== 0) {
            status = 'Amount must be a multiple of 50';
        }

        this.setState({
            amount: parseFloat(event.target.value),
            errorstatus: status
        })
    };

    handleOnclick = () => {
        if (!this.state.amount) {
            return;
        }
        const data = {type: 'CREDIT', amount: this.state.amount}
        addMoneyService.post(this.props.id, data)
            .then((response) => {
                this.setState({
                    amount: '',
                    status: 'You have successfully add ' + response.amount + ' in your wallet',
                    errorstatus: ''
                })
                this.props.onAddMoney();
                setTimeout(() => {
                    this.extracted();
                }, 2000)
            }).catch(error => {
            this.setState({
                status: '',
                errorstatus: 'Failed to add money'
            })
        })
    };

    extracted() {
        this.setState({
            amount: '',
            status: ''
        })
        this.props.changeDisplay()
    }

    render() {
        return (
            <div>
                Amount: <input min={50} max={50000} type={"number"}
                               value={this.state.amount}
                               onChange={this.handleOnChange}/><br/>
                <label id={'success'}><font color={'green'}>{this.state.status}</font></label>
                <label id={'failure'}><font color={'red'}>{this.state.errorstatus}</font></label><br/>
                <button style={{display: this.state.errorstatus.length > 0 ? 'none': ''}} className="button" onClick={this.handleOnclick}>Add
                </button>
                <br/><br/>

            </div>
        );
    }
}

export default AddMoney;