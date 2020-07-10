import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import OrderHistoryDetailsModal from "./OrderHistoryDetailsModal";

describe('Test order history details modal component', () => {

    it('OrderHistoryDetailsModal should render without crashing', () => {

        let wrapper = shallow(<OrderHistoryDetailsModal/>);
        expect(wrapper.find("[data-testid='OrderHistoryDetailsModal']")).toHaveLength(1);
    });

});





