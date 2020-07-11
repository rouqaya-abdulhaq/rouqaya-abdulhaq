import React from 'react';
import {shallow} from 'enzyme';
import Footer from './footer';
import SocialLink from '../../UI/socialLink/socialLink';

describe('<Footer/>',()=>{
    it('renders' , ()=>{
        shallow(<Footer/>);
    });

    it('has license' , ()=>{
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find('.license'));
    });

    it('has links' , ()=>{
        const wrapper = shallow(<Footer/>);
        expect(wrapper.find(SocialLink));
    });
});