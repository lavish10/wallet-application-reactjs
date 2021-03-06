import Header from "./Header";
import React from "react";
import {shallow} from "enzyme";

describe('header test', function () {
    it('should be able to display the user name in header', function () {
        const mockFn = jest.fn();
        const header = shallow(<Header name={"someName"}/>);
        expect(header.find('#username')).toHaveLength(1);
        expect(header.find('#username').text()).toEqual("someName");
    });
    it('should be able to highlight the home page', function () {
        const header = shallow(<Header name={"someName"} currentPage="home"/>);
        expect(header.find('Link[name="home"]').hasClass('nav-link active')).toEqual(true);

    });
    it('should be able to highlight the transactions page', function () {
        const header = shallow(<Header name={"someName"} currentPage="transactions"/>);
        expect(header.find('Link[name="transactions"]').hasClass('nav-link active')).toEqual(true);
    });
});