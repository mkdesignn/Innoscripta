import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import CardOrderHistory from "./CardOrderHistory";

describe('cardOrderHistory test', () => {

    it('CardOrderHistory should render without crashing', () => {

        let item = {product_name: 'test', price: 1};
        let wrapper = shallow(<CardOrderHistory item={item} />);
        expect(wrapper.find("[data-testid='cardOrderHistory']")).toHaveLength(1);
    });

});
