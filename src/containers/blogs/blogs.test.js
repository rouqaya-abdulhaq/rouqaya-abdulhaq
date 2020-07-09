import React from 'react';
import {shallow} from 'enzyme';
import {Blogs} from './blogs';
import Card from '../../components/UI/card/card';
import Btn from '../../components/UI/buttons/button/button';
import { BrowserRouter } from 'react-router-dom';

describe('<Blogs/>',()=>{
    it('should not contain blog cards',()=>{
        const wrapper = shallow(<Blogs/>);
        expect(wrapper.find(Card)).toHaveLength(0);
    });

    it('should contain 2 blog cards',()=>{
        const wrapper = shallow(<Blogs />, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({blogs: [{title : 'blog1', id:1}, {title : 'blog2',id:2}]});
        expect(wrapper.find(Card)).toHaveLength(2);
    });

    it('should increments load count',()=>{
        const wrapper = shallow(<Blogs />, {
            wrappingComponent : BrowserRouter
        });
        const loadCount = wrapper.instance().state.loadCount;
        const expected = loadCount + 1;
        wrapper.instance().getNextBlogs();
        expect(wrapper.instance().state.loadCount).toEqual(expected);
    });

    it('should decrement when load count is > 0',()=>{
        const wrapper = shallow(<Blogs />, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().getNextBlogs();
        const loadCount = wrapper.instance().state.loadCount;
        const expected = loadCount - 1;
        wrapper.instance().getPrevBlogs();
        expect(wrapper.instance().state.loadCount).toEqual(expected);
    });

    it('should not decrement when load count is 0',()=>{
        const wrapper = shallow(<Blogs />, {
            wrappingComponent : BrowserRouter
        });
        const loadCount = wrapper.instance().state.loadCount;
        wrapper.instance().getPrevBlogs();
        expect(wrapper.instance().state.loadCount).toEqual(0);
    });

    it('should pass disapled as true when load count is 0',()=>{
        const wrapper = shallow(<Blogs />, {
            wrappingComponent : BrowserRouter
        });
        const disapled =  wrapper.find(Btn).first().prop('disapled');
        expect(disapled).toEqual('true');
    });

    it('should pass disapled as null when load count > 0',()=>{
        const wrapper = shallow(<Blogs />, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().getNextBlogs();
        const disapled =  wrapper.find(Btn).first().prop('disapled');
        expect(disapled).toEqual(null);
    });
});