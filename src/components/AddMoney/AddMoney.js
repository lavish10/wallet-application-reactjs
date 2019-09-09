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
        this.setState({
            amount: '',
            status: ''
        });
        this.props.changeDisplay()
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Container>
                            <h2>Add Money</h2>
                            <Row>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">
                                            Amount: </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        min={50} max={50000} type={"number"}
                                        value={this.state.amount}
                                        name="amount"
                                        onChange={this.handleOnChange}
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
                                    <Button variant="success" onClick={this.handleOnclick}
                                            disabled={this.state.errorstatus.length > 0}>Add</Button>
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