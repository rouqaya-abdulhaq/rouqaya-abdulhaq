import React from 'react';
import {shallow} from 'enzyme';
import Link from './link';

describe('<Link />', ()=>{
    it('should render',()=>{
        shallow(<Link/>);
    });

    it('should display value as passed props',()=>{
        const wrapper = shallow(<Link to="page"/>);
        expect(wrapper.containsMatchingElement(<div className="link">page</div>))
    });
});