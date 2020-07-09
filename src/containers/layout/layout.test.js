import React from 'react';
import {shallow} from 'enzyme';
import Layout from './layout';

describe('<Layout />',()=>{
    it('should toggle showSideBar',()=>{
        const wrapper = shallow(<Layout/>);
        wrapper.instance().toggleSideBarHandler();
        expect(wrapper.instance().state.showSideBar).toEqual(true);
        wrapper.instance().toggleSideBarHandler();
        expect(wrapper.instance().state.showSideBar).toEqual(false);
        wrapper.instance().toggleSideBarHandler();
        expect(wrapper.instance().state.showSideBar).toEqual(true);
    });
});