import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter() });

import OrderList from "./OrderList";
it('render without crashing', () => {

    const div = document.createElement('div');
    ReactDom.render(<OrderList/>, div);
});


it('should be visible', () => {
    const wrapper = shallow(<OrderList/>);
    expect(wrapper.find('div')).toHaveLength(1);
});


