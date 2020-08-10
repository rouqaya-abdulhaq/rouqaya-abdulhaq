import React from 'react';
import {shallow} from 'enzyme';
import {Blogs} from './blogs';
import Card from '../../components/UI/card/card';
import Btn from '../../components/UI/buttons/button/button';
import Spinner from '../../components/UI/spinner/spinner';
import { BrowserRouter } from 'react-router-dom';
import ServerErr from '../../components/layout/errorPage/serverErr';

describe('<Blogs/>',()=>{
    it('should not contain blog cards',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>);
        expect(wrapper.find(Card)).toHaveLength(0);
    });

    it('should contain 2 blog cards',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({blogs: [{title : 'blog1', id:1}, {title : 'blog2',id:2}]});
        expect(wrapper.find(Card)).toHaveLength(2);
    });

    it('should increments load count',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({blogsCount : 1});
        const loadCount = wrapper.instance().state.loadCount;
        const expected = loadCount + 1;
        wrapper.instance().getNextBlogs();
        expect(wrapper.instance().state.loadCount).toEqual(expected);
    });

    it('should decrement when load count is > 0',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({loadCount : 1});
        const loadCount = wrapper.instance().state.loadCount;
        const expected = loadCount - 1;
        wrapper.instance().getPrevBlogs();
        expect(wrapper.instance().state.loadCount).toEqual(expected);
    });

    it('should not decrement when load count is 0',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        const loadCount = wrapper.instance().state.loadCount;
        wrapper.instance().getPrevBlogs();
        expect(wrapper.instance().state.loadCount).toEqual(0);
    });

    it('should pass disapled as true to prev Btn when load count is 0',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        const disapled =  wrapper.find(Btn).first().prop('disapled');
        expect(disapled).toEqual('true');
    });

    it('should pass disapled as null to prev Btn when load count > 0',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({loadCount : 1});
        const disapled =  wrapper.find(Btn).first().prop('disapled');
        expect(disapled).toEqual(null);
    });

    it('should not increment when loadCount >= blosCount',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().getNextBlogs();
        expect(wrapper.instance().state.loadCount).toEqual(0);
    });

    it('should pass disapled as true to next Btn when blogs count is bigger than load count',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        const disapled =  wrapper.instance().state.loadCount >= wrapper.instance().state.blogsCount ? "true" : null;
        expect(disapled).toEqual('true');
    });

    it('should pass disapled as null to next Btn when blogs count is bigger than load count',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({blogsCount : 1});
        const disapled =  wrapper.instance().state.loadCount >= wrapper.instance().state.blogsCount ? "true" : null;
        expect(disapled).toEqual(null);
    });

    it('should not render serverErr when hasErr = false',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find(ServerErr)).toHaveLength(0);
    });

    it('should render serverErr when hasErr = true',()=>{
        const wrapper = shallow(<Blogs loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({hasErr : true});
        expect(wrapper.find(ServerErr)).toHaveLength(1);
    });

    it('should contain spinner when loading props is true',()=>{
        const wrapper = shallow(<Blogs isLoading={true} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find(Spinner));
    });

    it('should not contain spinner when loading props is true',()=>{
        const wrapper = shallow(<Blogs isLoading={false} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });

    it('should handle empty blogs state',()=>{
        const wrapper = shallow(<Blogs isLoading={false} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        expect(wrapper.find('.empty'));
    })

    it('should not render empty blogs p',()=>{
        const wrapper = shallow(<Blogs isLoading={false} loadingStarted={()=>{return null}} loadingFinished={()=>{return null}}/>, {
            wrappingComponent : BrowserRouter
        });
        wrapper.instance().setState({blogs : [{test : "test"}]});
        expect(wrapper.find('.empty')).toHaveLength(0);
    })
});