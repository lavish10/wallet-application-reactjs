import React, {Component} from 'react';
import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Col,
    Container, FormCheck,
    FormControl,
    FormGroup, FormLabel,
    InputGroup,
    Row
} from "react-bootstrap";
import {Radio, RadioGroup} from 'react-radio-group'
import getStartDate from "../utils/getStartDate";
import FilterService from "../../service/FilterService";
import RecentTransactionsView from "../RecentTransactions/RecentTransactions.view";
import Transactions from "../Transactions/Transactions";
import TransactionsView from "../Transactions/TransactionView";

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
        this.setState({
            startDate: getStartDate(event),
            endDate: new Date()
        });
    }

    handleOnClick() {
        if (!this.state.startDate) {
            return;
        }
        const query = {startDate: this.state.startDate, endDate: this.state.endDate}
        FilterService.get(this.props.id, query).then(response => this.setState({
            transactions: response
        }));

    }

    render() {

        return (
            <Container>
                <FormGroup as={Row}>
                    <Col sm={10}>
                        <FormCheck
                            inline
                            type="radio"
                            label="1 Month"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onClick={this.handleOnChange}
                        />
                        <FormCheck
                            inline
                            type="radio"
                            label="3 Month"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            onClick={this.handleOnChange}
                        />
                        <FormCheck
                            inline
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