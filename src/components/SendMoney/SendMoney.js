import React, {Component} from 'react';

class SendMoney extends Component {

    render() {
        return (
            <div>
                <h2>Send Money</h2>
                <label>Phone Number</label><input type="text" name="phoneNumber"/><br/>
                <label>Amount</label><input type="text" name="amount"/><br/>
                <label>Remarks</label><input type="text" name="remarks"/><br/>
                <button className="button">Send</button>
            </div>
        );
    }
}

SendMoney.propTypes = {};

export default SendMoney;
