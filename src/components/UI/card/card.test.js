import React from 'react';
import {shallow} from 'enzyme';
import Card from './card';

describe('<Card/>',()=>{
    it('should not contain an img',()=>{
        const wrapper = shallow(<Card/>);
        expect(wrapper.find('img')).toHaveLength(0);
    });

    it('should contain an img',()=>{
        const wrapper = shallow(<Card imgPath="testPath"/>);
        expect(wrapper.find('img')).toHaveLength(1);
    });
});