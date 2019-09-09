import React, {Component} from 'react';
import sendMoneyService from "../../service/SendMoneyService";
import Validators from '../utils/Validators';

class SendMoney extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            amount: '',
            remarks: '',
            status: '',
            errors: {}
        }
    }

    onChangeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };
    onPhoneNumberBlurHandler = () => {
        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                phoneNumberError: Validators.checkValidPhoneNumber(this.state.phoneNumber)
            }
        })

    };

    onRemarksBlurHandler = () => {

        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                remarksError: Validators.checkValidRemarks(this.state.remarks)
            }
        })
    };

    onAmountBlurHandler = () => {
        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                amountError: Validators.checkValidAmount(this.state.amount)
            }
        })

    };
    extracted = () => {
        this.setState({
            status: ''
        });
    };
    checkErrorCount = () => {
        return Object.keys(this.state.errors).filter(key => this.state.errors[key]).length;
    };

    handleSendMoney = () => {
        if (this.checkErrorCount()) {
            return;
        }
        const data = {type: 'DEBIT', amount: this.state.amount, receiverPhoneNumber: this.state.phoneNumber};
        sendMoneyService.sendMoney(this.props.id, data)
            .then((response) => {
                this.setState({
                    amount: '',
                    phoneNumber: '',
                    remarks: '',
                    errors: {},
                    status: 'You have successfully transferred ' + response.amount + ' in ' + response.wallet.name + ' wallet'
                });
                this.props.onSendMoney();
                setTimeout(() => {
                    this.extracted();
                }, 20000)
            }).catch(error => {
            this.setState({
                status: error.response.data.message
            })
        });
    };

    render() {
        return (
            <div>
                <h2>Send Money</h2>

                <label>Phone Number</label> <input type="text" name="phoneNumber" value={this.state.phoneNumber}
                                                   onChange={this.onChangeHandler}
                                                   onBlur={this.onPhoneNumberBlurHandler} required/>
                <span className="error">{this.state.errors.phoneNumberError}</span><br/>
                <label>Amount</label><input type="text" name="amount" value={this.state.amount}
                                            onChange={this.onChangeHandler}
                                            onBlur={this.onAmountBlurHandler} required/>
                <span className="error">{this.state.errors.amountError}</span><br/>
                <label>Remarks</label><input type="text" name="remarks" value={this.state.remarks}
                                             onChange={this.onChangeHandler}
                                             onBlur={this.onRemarksBlurHandler} required/>
                <span className="error"> {this.state.errors.remarksError}</span><br/>
                <button onClick={this.handleSendMoney} disabled={this.checkErrorCount()}>Send</button>
                <br/>
                <span id="response">{this.state.status}</span>
            </div>
        );
    }
}

SendMoney.propTypes = {};

export default SendMoney;
