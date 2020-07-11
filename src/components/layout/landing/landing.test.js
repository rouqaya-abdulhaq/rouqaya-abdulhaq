import React from 'react';
import {shallow} from 'enzyme';
import Landing from './landing';

describe('<Landing/>',()=>{
    it('renders',()=>{
        shallow(<Landing/>);
    });

    it('has first animation card',()=>{
        const wrapper = shallow(<Landing/>);
        expect(wrapper.find('.firstAnimationCard'));
    });

    it('has second animation card',()=>{
        const wrapper = shallow(<Landing/>);
        expect(wrapper.find('.secondAnimationCard'));
    });

    it('has third animation card',()=>{
        const wrapper = shallow(<Landing/>);
        expect(wrapper.find('.thirdAnimationCard'));
    });

    it('has fourth animation card',()=>{
        const wrapper = shallow(<Landing/>);
        expect(wrapper.find('.fourthAnimationCard'));
    });
});