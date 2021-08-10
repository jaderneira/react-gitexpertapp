import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGridItem />', () => {

    const wrapper = shallow(<GifGridItem />);

    test('should show <GifGridItem /> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
