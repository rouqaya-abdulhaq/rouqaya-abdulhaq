import React from 'react';
import {shallow} from 'enzyme';
import  Header from './header';
import Logo from '../../UI/logo/logo';
import {Link} from 'react-router-dom';

describe('<Footer/>',()=>{
    it('renders' , ()=>{
        shallow(<Header/>);
    });

    it('has logo' , ()=>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find(Logo));
    });

    it('has links' , ()=>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find(Link));
    });
});