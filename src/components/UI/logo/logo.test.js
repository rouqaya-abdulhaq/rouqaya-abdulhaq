import React from 'react';
import {shallow} from 'enzyme';
import Logo from './logo';

describe('<Logo/>',()=>{
    it('should render',()=>{
        shallow(<Logo/>);
    });

    it('should have logo class',()=>{
        const wrapper = shallow(<Logo/>);
        expect(wrapper.hasClass('logo'));
    });
});