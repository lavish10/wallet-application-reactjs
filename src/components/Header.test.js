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
    it('should be able to highlight the home page on clicking', function () {
        const header = shallow(<Header name={"someName"}/>);
        const home = header.find('Link[name="home"]');
        const event = {target: {name: "home"}};
        home.simulate('click', event);
        expect(header.state().currentPage).toEqual("home");
        expect(header.find('Link[name="home"]').hasClass('nav-link active')).toEqual(true);

    });
    it('should be able to highlight the transactions page', function () {
        const header = shallow(<Header name={"someName"}/>);
        const home = header.find('Link[name="transactions"]');
        const event = {target: {name: "transactions"}};
        home.simulate('click', event);
        expect(header.state().currentPage).toEqual("transactions");
        expect(header.find('Link[name="transactions"]').hasClass('nav-link active')).toEqual(true);
    });
});