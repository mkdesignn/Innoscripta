import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import CardOrder from "./CardOrder";

it('CardOrder should render without crashing', () => {

    let item = {avatar: 'avatar', name: 'name'};
    let wrapper = shallow(<CardOrder item={item} />);
    expect(wrapper.find("[data-testid='cardOrder']")).toHaveLength(1);
});

it('CardOrder should should euro price', () => {

    let item = {avatar: 'avatar', name: 'name', quantity: 1, price: 1};
    let wrapper = shallow(<CardOrder item={item} />);
    expect(wrapper.find("[data-testid='cardOrder']").html())
        .toContain('€0.88')
});
