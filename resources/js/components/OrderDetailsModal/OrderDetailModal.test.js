import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import OrderDetailsModal from "./OrderDetailsModal";

describe('Test orderItems component', () => {

    it('orderDetailModal should render without crashing', () => {

        let item = {
            avatar: 'avatar.test',
            name: 'name',
            price: 'price',
            id: 1,
            ingredients: JSON.stringify(['test1', 'test2'])
        };
        let wrapper = shallow(<OrderDetailsModal activeOrderItem={item} show={true} item={item}/>);

        expect(wrapper.find("[data-testid='orderDetailsModal']")).toHaveLength(1);
    });

});





