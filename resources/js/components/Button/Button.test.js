import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import Button from "./Button";

it('button should render without crashing', () => {

    let wrapper = shallow(<Button title="button title" />);
    expect(wrapper.find("[data-testid='button']").html()).toContain('button title')
});
