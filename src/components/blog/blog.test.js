import React from 'react';
import {shallow} from 'enzyme';
import Blog from './blog';

describe('<Blog />',()=>{
    it('renders',()=>{
        shallow(<Blog/>);
    });
});