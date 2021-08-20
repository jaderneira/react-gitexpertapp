import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Tests in <AddCategory />', () => {

    const setCategories = jest.fn();
    const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
        
    test('should show <AddCategory /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change the text input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        
        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    })

    test('Not should post the submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
    })
    
    
})
