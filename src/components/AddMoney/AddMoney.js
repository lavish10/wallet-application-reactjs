import React, {Component} from 'react';
import addMoneyService from "../../service/AddMoneyService";
import './AddMoney.css';
import {Alert, Button, Card, Col, Container, FormControl, InputGroup, Row} from 'react-bootstrap';

class AddMoney extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            amount: '',
            errorstatus: '',
            status: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            amount: isNaN(parseFloat(event.target.value)) ?
                '' : parseFloat(event.target.value),
            status: ''
        })
    };
    handleOnFocusIn = () => {
        this.setState({
            errorstatus: '',
            status: ''
        })
    }
    handleOnBlur = () => {
        let status = '';

        if (this.state.amount < 50) {
            status = 'Amount must be greater or equal to 50';
        } else if (this.state.amount > 50000) {
            status = 'Amount must be less than or equal to 50000';
        } else if (this.state.amount % 50 !== 0) {
            status = 'Amount must be a multiple of 50';
        }
        this.setState({errorstatus: status})
    }

    handleOnclick = () => {
        if (!this.state.amount) {
            return;
        }
        const data = {type: 'CREDIT', amount: this.state.amount};
        addMoneyService.post(this.props.id, data)
            .then((response) => {
                this.setState({
                    amount: '',
                    status: 'You have successfully add ' + response.amount + ' in your wallet',
                    errorstatus: ''
                });
                this.props.onAddMoney();
                setTimeout(() => {
                    this.extracted();
                }, 20000)
            }).catch(error => {
            this.setState({
                status: '',
                errorstatus: 'Failed to add money'
            })
        })
    };

    extracted() {
        if (!this.state.amount > 0) {
            this.setState({
                amount: '',
                status: ''
            });
            //this.props.changeDisplay()
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Container>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Amount: </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        value={this.state.amount}
                                        name="amount"
                                        onChange={this.handleOnChange}
                                        onBlur={this.handleOnBlur}
                                        onFocus={this.handleOnFocusIn}
                                        isInvalid={this.state.errorstatus.length>0}
                                        isValid={this.state.errorstatus.length===0 && this.state.amount>=50 && this.state.amount<=50000}
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Row>
                            <Alert variant="success" show={this.state.status} id="success">
                                {this.state.status}
                            </Alert>
                            <Alert variant="danger" show={this.state.errorstatus} id="failure">
                                {this.state.errorstatus}
                            </Alert>
                            <Row>
                                <Col md={{span: 3, offset: 5}}>
                                    <Button onClick={this.handleOnclick}
                                            disabled={this.state.errorstatus.length > 0}
                                            variant={this.state.errorstatus.length <= 0 ? "success" : "info"}>Add</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default AddMoney;