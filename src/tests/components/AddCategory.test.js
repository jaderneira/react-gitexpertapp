import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Tests in <AddCategory />', () => {

    const setCategories = () => {}
    const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    
    
    test('should show <AddCategory /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
