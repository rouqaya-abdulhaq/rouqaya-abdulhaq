import React from 'react';
import {shallow} from 'enzyme';
import Page from './errorPage';

describe('<Page />',()=>{
    it('renders',()=>{
        shallow(<Page />);
    });

    it('renders error msg',()=>{
        const wrapper = shallow(<Page errMsg="error"/>);
        expect(wrapper.matchesElement(<p>error</p>));
    });
});