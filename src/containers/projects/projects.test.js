import React from 'react';
import { shallow} from 'enzyme';
import Projects from './projects';
import {BrowserRouter} from 'react-router-dom';
import Card from '../../components/UI/card/card';
import Btn from '../../components/UI/buttons/button/button';

describe('<Projects />',()=>{
    it('should not render any cards when projects = []',()=>{
        const wrapper = shallow(<Projects />, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find(Card)).toHaveLength(0);
    });

    it('should render 2 cards when projects = [] of size 2',()=>{
        const wrapper = shallow(<Projects />, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({projects : [{title : 'proj1',id :1}, {title : 'proj2', id :2}]})
        expect(wrapper.find(Card)).toHaveLength(2);
    });

    it('should increments load count',()=>{
        const wrapper = shallow(<Projects />, {
            wrappingComponent : BrowserRouter
        });
        const loadCount = wrapper.instance().state.loadCount;
        const expected = loadCount + 1;
        wrapper.instance().getNextProjects();
        expect(wrapper.instance().state.loadCount).toEqual(expected);
    });

    it('should decrement when load count is > 0',()=>{
        const wrapper = shallow(<Projects />, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().getNextProjects();
        const loadCount = wrapper.instance().state.loadCount;
        const expected = loadCount - 1;
        wrapper.instance().getPrevProjects();
        expect(wrapper.instance().state.loadCount).toEqual(expected);
    });

    it('should not decrement when load count is 0',()=>{
        const wrapper = shallow(<Projects />, {
            wrappingComponent : BrowserRouter
        });
        const loadCount = wrapper.instance().state.loadCount;
        wrapper.instance().getPrevProjects();
        expect(wrapper.instance().state.loadCount).toEqual(0);
    });

    it('should pass disapled as true when load count is 0',()=>{
        const wrapper = shallow(<Projects />, {
            wrappingComponent : BrowserRouter
        });
        const disapled =  wrapper.find(Btn).first().prop('disapled');
        expect(disapled).toEqual('true');
    });

    it('should pass disapled as null when load count > 0',()=>{
        const wrapper = shallow(<Projects />, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().getNextProjects();
        const disapled =  wrapper.find(Btn).first().prop('disapled');
        expect(disapled).toEqual(null);
    });
});