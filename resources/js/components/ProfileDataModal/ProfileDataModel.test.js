import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {configure, shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import ProfileDataModal from "./ProfileDataModal";

it('ProfileDataModal should be visible', () => {

    let wrapper = shallow(<ProfileDataModal/>);
    expect(wrapper.find("[data-testid='ProfileDataModel']")).toHaveLength(1);
});

it('loader should be visible', () => {

    let wrapper = shallow(<ProfileDataModal loading={true}/>);
    expect(wrapper.find("[data-testid='ClipLoaderWrapper']")).toHaveLength(1);
});

it('succsessOrder text should be visible, if order get success', () => {

    let data = {code: 1};
    let wrapper = shallow(<ProfileDataModal succsessOrder={true} data={data}/>);
    expect(wrapper.find("[data-testid='successOrderWrapper']")).toHaveLength(1);
    expect(wrapper.find("[data-testid='successOrderWrapper']").html()).toContain('Your order has been completed successfully, order code: 1');
});

it('error should be visible, if order get rejected', () => {

    let wrapper = shallow(<ProfileDataModal succsessOrder={false} errors="error"/>);
    expect(wrapper.find("[data-testid='rejectedOrderWrapper']")).toHaveLength(1);
    expect(wrapper.find("[data-testid='rejectedOrderWrapper']").html()).toContain('<h4>error</h4>');
});

it('input boxes should be visible', () => {

    let wrapper = shallow(<ProfileDataModal loading={false} succsessOrder={false}/>);
    expect(wrapper.find("[data-testid='ProfileDataModel']").html()).toContain('<input type=\"text\" name=\"name\"');
    expect(wrapper.find("[data-testid='ProfileDataModel']").html()).toContain('<input type=\"text\" name=\"surname\"');
    expect(wrapper.find("[data-testid='ProfileDataModel']").html()).toContain('<input type=\"text\" name=\"address\"');
});


