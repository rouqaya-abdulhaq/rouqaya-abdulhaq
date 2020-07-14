import React from 'react';
import {shallow} from 'enzyme';
import ServerErr from './serverErr';

describe('<ServerErr />',()=>{
    it('renders',()=>{
        shallow(<ServerErr/>);
    });

    it('has serverErr class',()=>{
        const wrapper = shallow(<ServerErr/>);
        expect(wrapper.hasClass('serverErr'));
    });

    it('should pass data to p elemnt',()=>{
        const wrapper = shallow(<ServerErr data="test"/>);
        expect(wrapper.containsMatchingElement(<p>Could not reach server to load test, an error may have occurred.</p>));
    });
});