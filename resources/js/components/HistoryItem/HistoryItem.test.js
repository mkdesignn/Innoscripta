import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import HistoryItem from "./HistoryItem";

describe('HistoryItem test', () => {

    it('HistoryItem should render without crashing', () => {
        let item = {code: '1234', created_at: '2020', articles: []};
        let wrapper = shallow(<HistoryItem item={item} />);
        expect(wrapper.find("[data-testid='HistoryItem']")).toHaveLength(1);
    });

    it('HistoryItem should show itemCode and itemCreatedAt', () => {

        let item = {code: '1234', created_at: '2020', articles: []};
        let wrapper = shallow(<HistoryItem item={item} />);
        expect(wrapper.find("[data-testid='HistoryItem']").html()).toContain('1234');
        expect(wrapper.find("[data-testid='HistoryItem']").html()).toContain('2020');
    });

});
