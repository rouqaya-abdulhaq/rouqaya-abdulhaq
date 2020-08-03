import React from 'react';
import {shallow} from 'enzyme';
import About from './about';
import Spinner from '../../UI/spinner/spinner';

describe('<About />',()=>{
    it('should render',()=>{
        shallow(<About/>);
    });

    it('shows spinner when props loading is true',()=>{
        const wrapper = shallow(<About isLoading={true} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>);
        expect(wrapper.find(Spinner));
    });

    it('does not show spinner when props loading is false',()=>{
        const wrapper = shallow(<About isLoading={false} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>);
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });
});