import React from 'react';
import {shallow} from 'enzyme';
import Page from './404Page';

describe('<Page />',()=>{
    it('renders',()=>{
        shallow(<Page />);
    });
});