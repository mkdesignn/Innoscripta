import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import OrderList from "./OrderList";
describe('test orderList', () => {

    let orderData = [{price: 100, quantity: 1, id: 1}];

    it('orderList should be visible', () => {

        const wrapper = shallow(<OrderList orders={orderData}/>);
        expect(wrapper.find("[data-testid='orderList']")).toHaveLength(1);
    });

    it('orderList should be visible', () => {

        const wrapper = shallow(<OrderList orders={orderData}/>);
        expect(wrapper.find("[data-testid='orderList']")).toHaveLength(1);
    });

    it('totalPrice should be visible and correct', () => {

        const wrapper = shallow(<OrderList orders={orderData} deliveryPrice="10"/>);
        expect(wrapper.find("[data-testid='orderList']").html()).toContain('<span>Total Price :</span><span> $110</span>');
    });

    it('totalPrice should be zero if no product selected', () => {

        const wrapper = shallow(<OrderList orders={[]} deliveryPrice="10"/>);
        expect(wrapper.find("[data-testid='orderList']").html()).toContain('<span>Total Price :</span><span>$0</span>');
    });

});

