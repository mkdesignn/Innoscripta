import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import ChooseOrder from "./ChooseOrder";

describe('ChooseOrder test', () => {

    it('ChooseOrder should render without crashing', () => {

        let wrapper = shallow(<ChooseOrder />);
        expect(wrapper.find("[data-testid='ChooseOrder']")).toHaveLength(1);
    });

    it('ChooseOrder should load the orders', () => {

        let wrapper = shallow(<ChooseOrder orderLoading={false}/>);
        expect(wrapper.find("[data-testid='orders']")).toHaveLength(1);
    });

    it('ChooseOrder should load the loader', () => {

        let wrapper = shallow(<ChooseOrder orderLoading={true}/>);
        expect(wrapper.find("[data-testid='loader-wrapper']")).toHaveLength(1);
    });

});
