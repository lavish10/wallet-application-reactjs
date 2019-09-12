import {shallow} from "enzyme";
import React from "react";
import DateFilter from "./DateFilter";
import {FormCheck, FormGroup} from "react-bootstrap";

describe('DateFilter', function () {
    it('should display 3 radio buttons ', function () {
        const wallet = shallow(<DateFilter/>);
        const container = wallet.find('Container');
        const formGroup = container.find('FormGroup');
        const formCheck = formGroup.find('FormCheck');

        expect(formCheck).toHaveLength(3);
    });

    it('should display 1 search button ', function () {
        const wallet = shallow(<DateFilter id={1}/>);
        const Button = wallet.find('Button');

        expect(Button).toHaveLength(1);
    });

});