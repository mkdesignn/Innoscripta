import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import HistoryItem from "./HistoryItemHeader";

describe('HistoryItem test', () => {

    it('HistoryItem should render without crashing', () => {
        let wrapper = shallow(<HistoryItem />);
        expect(wrapper.find("[data-testid='historyItem']")).toHaveLength(1);
    });

    it('HistoryItem should show the contents', () => {
        let wrapper = shallow(<HistoryItem />);
        expect(wrapper.find("[data-testid='historyItem']").html()).toContain('Order Code');
        expect(wrapper.find("[data-testid='historyItem']").html()).toContain('Total Price');
        expect(wrapper.find("[data-testid='historyItem']").html()).toContain('Created Date');
    });

});
