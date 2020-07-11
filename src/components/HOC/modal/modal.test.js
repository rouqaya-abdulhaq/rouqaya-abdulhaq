import React from 'react';
import {shallow} from 'enzyme';
import Modal from './modal';

describe('<Blog />',()=>{
    it('renders',()=>{
        shallow(<Modal/>);
    });

    it('renders its children',()=>{
        const wrapper = shallow(<Modal><div className="test"></div></Modal>);
        expect(wrapper.find('.test'));
    });
});