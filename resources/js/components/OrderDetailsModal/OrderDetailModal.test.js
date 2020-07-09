import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import OrderItems from "./OrderItems";

describe('Test orderItems component', () => {

    it('render without crashing', () => {

        let item = {
            avatar: 'avatar.test',
            name: 'name',
            price: 'price',
            id: 1
        };
        let wrapper = shallow(<OrderItems onOrderClick={() => function (id) {
        }} item={item}/>);
        expect(wrapper.find("[data-testid='orderItems']")).toHaveLength(1);
    });

});





