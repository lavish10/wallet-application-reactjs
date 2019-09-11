import React, {Component} from 'react';
import sendMoneyService from "../../service/SendMoneyService";
import Validators from '../utils/Validators';
import {Alert, Button, Card, Col, Container, FormControl, InputGroup, Row} from 'react-bootstrap';
import '../../App.css';

class SendMoney extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            amount: '',
            remarks: '',
            successStatus: '',
            errorStatus: '',
            errors: {}
        }
    }

    onChangeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        /* istanbul ignore next */
        this.setState({
            [name]: value,
            successStatus: ''
        });
    };
    onPhoneNumberBlurHandler = () => {
        /* istanbul ignore next */
        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                phoneNumberError: Validators.checkValidPhoneNumber(this.state.phoneNumber)
            }
        })

    };

    onRemarksBlurHandler = () => {

        /* istanbul ignore next */
        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                remarksError: Validators.checkValidRemarks(this.state.remarks)
            }
        })
    };

    onAmountBlurHandler = () => {
        /* istanbul ignore next */
        this.setState({
            ...this.state,
            errors: {
                ...this.state.errors,
                amountError: Validators.checkValidAmount(this.state.amount)
            }
        })

    };
    extracted = () => {
        /* istanbul ignore next */
        if (this.state.phoneNumber.length === 0 &&
            this.state.amount.length === 0 &&
            this.state.remarks.length === 0) {
            this.setState({
                successStatus: '',
                errorStatus: ''
            });
        }
    };
    checkErrorCount = () => {
        return Object.keys(this.state.errors).filter(key => this.state.errors[key]).length;
    };

    handleSendMoney = () => {
        if (this.checkErrorCount()) {
            /* istanbul ignore next */
            return;
        }
        const data = {
            type: 'DEBIT',
            amount: this.state.amount,
            receiverPhoneNumber: this.state.phoneNumber,
            remarks: this.state.remarks
        };
        sendMoneyService.sendMoney(this.props.id, data)
            .then((response) => {
                /* istanbul ignore next */
                this.setState({
                    amount: '',
                    phoneNumber: '',
                    remarks: '',
                    errors: {},
                    successStatus: 'You have successfully transferred ₹ ' + response.amount + '.',
                    errorStatus: ''
                });
                this.props.onSendMoney();
                /* istanbul ignore next */
                setTimeout(() => {
                    this.extracted();
                }, 20000)
            }).catch(error => {
            /* istanbul ignore next */
            this.setState({
                errorStatus: error.response.data.message
            })
        });
    };

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Container>

                            <h2>Send Money</h2>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Phone Number</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name="phoneNumber"
                                        value={this.state.phoneNumber}
                                        onChange={this.onChangeHandler}
                                        onBlur={this.onPhoneNumberBlurHandler} required
                                        isInvalid={this.state.errors.phoneNumberError}
                                        isValid={!Validators.checkValidPhoneNumber(this.state.phoneNumber)}
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                    <FormControl.Feedback
                                        type="invalid">{this.state.errors.phoneNumberError}</FormControl.Feedback>
                                </InputGroup>
                            </Row>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Amount</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name="amount" value={this.state.amount}
                                        onChange={this.onChangeHandler}
                                        onBlur={this.onAmountBlurHandler} required
                                        isInvalid={this.state.errors.amountError}
                                        isValid={!Validators.checkValidAmount(this.state.amount)}
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                    <FormControl.Feedback
                                        type="invalid">{this.state.errors.amountError}</FormControl.Feedback>
                                </InputGroup>
                            </Row>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Remarks</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        name="remarks" value={this.state.remarks}
                                        placeholder="Optional"
                                        onChange={this.onChangeHandler}
                                        onBlur={this.onRemarksBlurHandler} required
                                        isInvalid={this.state.errors.remarksError}
                                        isValid={!Validators.checkValidRemarks(this.state.remarks)}
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                    <FormControl.Feedback
                                        type="invalid">{this.state.errors.remarksError}</FormControl.Feedback>
                                </InputGroup>
                                <span className="error">{this.state.errors.remarksError}</span>
                            </Row>
                            <Row>
                                <Col md={{span: 3, offset: 5}}>
                                    <Button variant="success" onClick={this.handleSendMoney}
                                            disabled={this.checkErrorCount()}>Send</Button>
                                </Col>
                            </Row>
                            <div>
                                <Alert variant="danger" show={this.state.errorStatus}
                                       className="response">
                                    {this.state.errorStatus}
                                </Alert>

                                <Alert variant="success" show={this.state.successStatus}
                                       className="response">
                                    {this.state.successStatus}
                                </Alert>
                            </div>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

SendMoney.propTypes = {};

export default SendMoney;
