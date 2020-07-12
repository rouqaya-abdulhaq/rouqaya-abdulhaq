import React from 'react';
import {shallow} from 'enzyme';
import Router from './router';
import {Switch, Route} from 'react-router-dom';

describe('<Router />',()=>{
    it('should render',()=>{
        shallow(<Router/>);
    });

    it('should contain switch',()=>{
        const wrapper = shallow(<Router/>);
        expect(wrapper.find(Switch));
    });

    it('should contain routes',()=>{
        const wrapper = shallow(<Router/>);
        expect(wrapper.find(Route));
    });
});