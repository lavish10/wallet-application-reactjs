import React, {Component} from 'react';
import sendMoney from "../../service/SendMoneyService";
import Validators from '../utils/Validators';

class SendMoney extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            amount: '',
            remarks: '',
            errors: {
                phoneNumberError: '',
                amountError: '',
                remarksError: ''
            }
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

    handleSendMoney = () => {
        sendMoney(this.props.id, this.state);
    };

    render() {
        return (
            <div>
                <h2>Send Money</h2>

                <label>Phone Number</label> <input type="text" name="phoneNumber"
                                                   onChange={this.onChangeHandler}
                                                   onBlur={this.onPhoneNumberBlurHandler} required/>
                <span className="error">{this.state.errors.phoneNumberError}</span><br/>
                <label>Amount</label><input type="text" name="amount"
                                            onChange={this.onChangeHandler}
                                            onBlur={this.onAmountBlurHandler} required/>
                <span className="error">{this.state.errors.amountError}</span><br/>
                <label>Remarks</label><input type="text" name="remarks"
                                             onChange={this.onChangeHandler}
                                             onBlur={this.onRemarksBlurHandler} required/>
                <span className="error"> {this.state.errors.remarksError}</span><br/>
                <button className="button" onClick={this.handleSendMoney}>Send</button>

            </div>
        );
    }
}

SendMoney.propTypes = {};

export default SendMoney;
