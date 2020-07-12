import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Layout from './containers/layout/layout';

describe('<App/>',()=>{
    it('should render',()=>{
        shallow(<App/>);
    });

    it('should render layout container',()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.find(Layout));
    });

    it('should have App class',()=>{
        const wrapper = shallow(<App/>);
        expect(wrapper.hasClass('App'));
    });
});