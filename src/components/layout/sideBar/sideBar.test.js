import React from 'react';
import {shallow} from 'enzyme';
import SideBar from './sideBar';
import {Link} from 'react-router-dom';

describe('<SideBar />',()=>{
    it('should render',()=>{
        shallow(<SideBar/>);
    });

    it('should have the toggle div with no style attribute',()=>{
       const wrapper =  shallow(<SideBar/>);
       expect(wrapper.containsMatchingElement(<div >|||</div>));
    });

    it('should have the toggle div with style attribute',()=>{
        const wrapper =  shallow(<SideBar showSideBar={true}/>);
        expect(wrapper.containsMatchingElement(<div style={{display: 'none'}} >|||</div>));
     });

     it('should have the menu div with no style attribute',()=>{
        const wrapper =  shallow(<SideBar/>);
        expect(wrapper.containsMatchingElement(<div id="menu" ></div>));
     });

     it('should have the toggle div with style attribute',()=>{
        const wrapper =  shallow(<SideBar showSideBar={true}/>);
        expect(wrapper.containsMatchingElement(<div id="menu" style={{left : 0}}></div>));
     });

     it('should contain links',()=>{
        const wrapper =  shallow(<SideBar />);
        expect(wrapper.find(Link));
     });
});