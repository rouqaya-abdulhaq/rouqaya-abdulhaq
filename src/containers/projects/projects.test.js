import React from 'react';
import { shallow} from 'enzyme';
import Projects from './projects';
import {BrowserRouter} from 'react-router-dom';
import Card from '../../components/UI/card/card';
import Btn from '../../components/UI/buttons/button/button';
import Spinner from '../../components/UI/spinner/spinner';
import ServerErr from '../../components/layout/errorPage/serverErr';

describe('<Projects />',()=>{
    it('should not render any cards when projects = []',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find(Card)).toHaveLength(0);
    });

    it('should render 2 cards when projects = [] of size 2',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({projects : [{title : 'proj1',id :1}, {title : 'proj2', id :2}]})
        expect(wrapper.find(Card)).toHaveLength(2);
    });

    it('should increments load count',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({projectsCount : 1});
        const loadCount = wrapper.instance().state.loadCount;
        const expected = loadCount + 1;
        wrapper.instance().getNextProjects();
        expect(wrapper.instance().state.loadCount).toEqual(expected);
    });

    it('should decrement when load count is > 0',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({loadCount : 1});
        const loadCount = wrapper.instance().state.loadCount;
        const expected = loadCount - 1;
        wrapper.instance().getPrevProjects();
        expect(wrapper.instance().state.loadCount).toEqual(expected);
    });

    it('should not decrement when load count is 0',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        const loadCount = wrapper.instance().state.loadCount;
        wrapper.instance().getPrevProjects();
        expect(wrapper.instance().state.loadCount).toEqual(0);
    });

    it('should pass disapled as true to prev Btn when load count is 0',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        const disapled =  wrapper.find(Btn).first().prop('disapled');
        expect(disapled).toEqual('true');
    });

    it('should pass disapled as null to prev Btn when load count > 0',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({loadCount : 1});
        const disapled =  wrapper.find(Btn).first().prop('disapled');
        expect(disapled).toEqual(null);
    });

    it('should not increment when loadCount >= projectsCount',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().getNextProjects();
        expect(wrapper.instance().state.loadCount).toEqual(0);
    });

    it('should pass disapled as true to next Btn when blogs count is bigger than load count',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        const disapled =  wrapper.instance().state.loadCount >= wrapper.instance().state.projectsCount ? "true" : null;
        expect(disapled).toEqual('true');
    });

    it('should pass disapled as null to next Btn when blogs count is bigger than load count',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({projectsCount : 1});
        const disapled =  wrapper.instance().state.loadCount >= wrapper.instance().state.projectsCount ? "true" : null;
        expect(disapled).toEqual(null);
    });

    it('should not render ServerErr when hasErr = false',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find(ServerErr)).toHaveLength(0)
    });

    it('should render ServerErr when hasErr = true',()=>{
        const wrapper = shallow(<Projects loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({hasErr : true})
        expect(wrapper.find(ServerErr)).toHaveLength(1)
    });

    it('should contain spinner when loading props is true',()=>{
        const wrapper = shallow(<Projects isLoading={true} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find(Spinner));
    });

    it('should not contain spinner when loading props is true',()=>{
        const wrapper = shallow(<Projects isLoading={false} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });
});