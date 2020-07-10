import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
import CategoryItems from "./CategoryItems";

describe('CategoryItem test', () => {

    it('CategoryItem should render without crashing', () => {

        let item = {product_name: 'test', price: 1, name: 'test'};
        let wrapper = shallow(<CategoryItems item={item} />);
        expect(wrapper.find("[data-testid='CategoryItems']")).toHaveLength(1);
        expect(wrapper.find("[data-testid='CategoryItems']").html()).toContain('test');
    });

});
