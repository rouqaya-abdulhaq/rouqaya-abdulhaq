import React from 'react';
import {shallow} from 'enzyme';
import NavButton from './navButton';

describe('<NavButton />',()=>{
    it('should render',()=>{
        shallow(<NavButton/>);
    });

    it('should have value as sent in props',()=>{
        const wrapper = shallow(<NavButton value="button"/>);
        expect(wrapper.containsMatchingElement(<button className="navButton">button</button>))
    });
});