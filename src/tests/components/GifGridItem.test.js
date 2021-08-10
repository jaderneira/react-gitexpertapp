import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGridItem />', () => {

    const title = 'A title'
    const url = 'https://via.placeholder.com/150'
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);
    

    test('should show <GifGridItem /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should have a paraph with the title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })
    
    
    
})
