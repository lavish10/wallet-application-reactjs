import React, {Component} from 'react';
import {Button, ButtonGroup, ButtonToolbar, Col, FormControl, InputGroup} from "react-bootstrap";
import { Radio, RadioGroup} from 'react-radio-group'
import getStartDate from "../utils/getStartDate";
import FilterService from "../../service/FilterService";
import RecentTransactionsView from "../RecentTransactions/RecentTransactions.view";

class DateFilter extends Component {

    constructor(props) {
        super(props);
        this.state={
            startDate:'',
            endDate:'',
            transactions:[]
        }
        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

     handleOnChange = (event)=> {
        this.setState({
            startDate: getStartDate(event),
            endDate: new Date()
        });
    }

    handleOnClick(){
        if(!this.state.startDate){
            return;
        }
        const query={startDate:this.state.startDate,endDate: this.state.endDate}
       FilterService.get(this.props.id,query).
       then(response => this.setState({
           transactions : response
       }));

    }
    render() {

        return (
            <div>
                <Col>
                    <RadioGroup name="fruits" onChange={this.handleOnChange}>
                        <div className="radio-button-background">
                            <Radio value="1" className="radio-button" />1 Month
                        </div>
                        <div className="radio-button-background">
                            <Radio value="3" className="radio-button" />3 Month
                        </div>
                        <div className="radio-button-background">
                            <Radio value="6" className="radio-button" />6 Month
                        </div>
                    </RadioGroup>
                </Col>

                <div>
                    <ButtonToolbar>
                        <Button variant="success" onClick={this.handleOnClick}>Search</Button>
                    </ButtonToolbar>
                </div>
                <RecentTransactionsView transactions={this.state.transactions}/>
            </div>
        );
    }
}

export default DateFilter;