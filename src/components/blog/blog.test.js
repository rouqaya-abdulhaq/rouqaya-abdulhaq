import React from 'react';
import {shallow} from 'enzyme';
import Blog from './blog';
import Spinner from '../UI/spinner/spinner';

describe('<Blog />',()=>{
    it('renders',()=>{
        shallow(<Blog/>);
    });

    it('shows spinner when props loading is true',()=>{
        const wrapper = shallow(<Blog isLoading={true} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>);
        expect(wrapper.find(Spinner));
    });

    it('does not show spinner when props loading is false',()=>{
        const wrapper = shallow(<Blog isLoading={false} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>);
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });
});