import React from 'react';
import {shallow} from 'enzyme';
import Spinner from './spinner';

describe('<Spinner/>',()=>{
    it('renders',()=>{
        expect(shallow(<Spinner/>));
    });

    it('has spinner class name',()=>{
        const wrapper = shallow(<Spinner/>);
        expect(wrapper.hasClass('spinner'));
    });
})
