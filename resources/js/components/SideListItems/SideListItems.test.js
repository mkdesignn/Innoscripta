import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {configure, shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import SideListItems from "./SideListItems";
import Home from "../../Assets/home.png";
import {BrowserRouter} from "react-router-dom";

it('sideListItems should be visible', () => {

    const wrapper = mount(
        <BrowserRouter>
            <SideListItems Link="/" exact={true} title={"Home"} imgName={Home} />
        </BrowserRouter>
    );

    expect(wrapper.find("[data-testid='navLink']")).toHaveLength(1);
});


