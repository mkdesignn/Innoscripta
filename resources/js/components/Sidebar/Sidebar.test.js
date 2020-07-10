import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {configure, shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Sidebar from "./Sidebar";
import Home from "../../Assets/home.png";
import {BrowserRouter} from "react-router-dom";
import SideListItems from "../SideListItems/SideListItems";

it('sidebar should be visible', () => {

    const wrapper = mount(
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    );

    // console.log(wrapper.find("[data-testid='Sidebar'] a").html());
    expect(wrapper.find("[data-testid='Sidebar']")).toHaveLength(1);
    expect(wrapper.find("[data-testid='Sidebar']").html()).toContain('Order History');
    expect(wrapper.find("[data-testid='Sidebar']").html()).toContain('Home');
});


