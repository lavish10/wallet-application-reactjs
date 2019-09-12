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
            transactions: [],
            monthFilter: [1, 3, 6],
            monthFilterCheck: {
                1: false,
                3: false,
                6: false
            }
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnChange = (event) => {
        console.log(event.target.value);
        const obj = {
            1: false,
            3: false,
            6: false
        };
        obj[event.target.value] = true;
        this.setState({
            monthFilterCheck: obj,
            startDate: getStartDate(event.target.value).toUTCString(),
            endDate: new Date().toUTCString()
        });
    };

    handleOnClick() {
        if (!this.state.startDate) {
            return;
        }
        const query = {startDate: this.state.startDate, endDate: this.state.endDate};
        FilterService.get(this.props.id, query).then(response => this.setState({
            transactions: response.map(transaction => {
                return {
                    ...transaction,
                    createdAt: dateTimeFormatter(transaction.createdAt),
                    amount: Math.round(parseInt(transaction.amount)).toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR'
                    }).slice(0, -3)
                }
            })
        }));
    };

    handleClearFilter = () => {
        this.setState({
            startDate: '',
            endDate: '',
            transactions: [],
            monthFilter: [1, 3, 6],
            monthFilterCheck: [false, false, false]
        });
    };

    render() {

        return (
            <Container>
                <Balance balance={this.props.balance}/>
                <FormGroup as={Row}>
                    <Col sm={10}>
                        {
                            this.state.monthFilter.map((month) => {
                                return (
                                    <FormCheck
                                        inline
                                        value={month}
                                        type="radio"
                                        checked={this.state.monthFilterCheck[month]}
                                        label={`${month} Month`}
                                        name="formHorizontalRadios"
                                        id={`formHorizontalRadios${month}`}
                                        onClick={this.handleOnChange}
                                    />
                                );
                            })
                        }
                    </Col>
                </FormGroup>
                <Col md={{span: 6, offset: 5}}>
                    <ButtonToolbar>
                        <Button variant="success" name="search" onClick={this.handleOnClick}>Search</Button>
                        <Button variant="danger" onClick={this.handleClearFilter}>Clear All</Button>
                    </ButtonToolbar>
                </Col>
                <br/>
                <TransactionsView transactions={this.state.transactions}/>
            </Container>
        );
    }
}

export default DateFilter;