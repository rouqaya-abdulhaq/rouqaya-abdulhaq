import React from 'react';
import {shallow} from 'enzyme';
import SocialLink from './socialLink';

describe('<SocialLink />',()=>{
    it('should render',()=>{
        shallow(<SocialLink/>);
    });

    it('should have an anchor tag',()=>{
        const wrapper = shallow(<SocialLink/>);
        expect(wrapper.find('a'));
    });

    it('should have an img tag',()=>{
        const wrapper = shallow(<SocialLink/>);
        expect(wrapper.find('img'));
    });
});