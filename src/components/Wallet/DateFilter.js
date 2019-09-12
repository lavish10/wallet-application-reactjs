import React, {Component} from 'react';
import {Button, ButtonToolbar, Col, Container, FormCheck, FormGroup, Row} from "react-bootstrap";
import getStartDate from "../utils/getStartDate";
import FilterService from "../../service/FilterService";
import TransactionsView from "../Transactions/TransactionView";
import dateTimeFormatter from "./../utils/dateTimeFormatter";
import Balance from "./Balance";

class DateFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            transactions: []
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnChange = (event) => {
        console.log(event.target.value);
        this.setState({
            startDate: getStartDate(event.target.value).toUTCString(),
            endDate: new Date().toUTCString()
        });
    }

    handleOnClick() {
        if (!this.state.startDate) {
            return;
        }
        const query = {startDate: this.state.startDate, endDate: this.state.endDate}
        FilterService.get(this.props.id, query).then(response => this.setState({
            transactions: response.map(transaction=> {
                return {
                    ...transaction,
                    createdAt:dateTimeFormatter(transaction.createdAt),
                    amount: Math.round(parseInt(transaction.amount)).toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR'
                    }).slice(0, -3)
                }
            })
        }));

    }

    render() {

        return (
            <Container>
                <Balance balance={this.props.balance}/>
                <FormGroup as={Row}>
                    <Col sm={10}>
                        <FormCheck
                            inline
                            value={1}
                            type="radio"
                            label="1 Month"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onClick={this.handleOnChange}
                        />
                        <FormCheck
                            inline
                            value={3}
                            type="radio"
                            label="3 Month"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            onClick={this.handleOnChange}
                        />
                        <FormCheck
                            inline
                            value={6}
                            type="radio"
                            label="6 Month"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            onClick={this.handleOnChange}
                        />
                    </Col>
                </FormGroup>
                <Col md={{ span: 6, offset: 5 }}>
                    <ButtonToolbar>
                        <Button variant="success" onClick={this.handleOnClick}>Search</Button>
                    </ButtonToolbar>
                </Col>
                <br/>
                <TransactionsView transactions={this.state.transactions}/>
            </Container>
        );
    }
}

export default DateFilter;