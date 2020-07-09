import React from 'react';
import {shallow} from 'enzyme';
import ErrHandler from './errHandler';
import ErrPage from '../../../components/layout/errorPage/errorPage';

describe('<ErrHandler/>',()=>{
    it('should not render ErrPage when hasErr = false',()=>{
        const wrapper = shallow(<ErrHandler/>);
        expect(wrapper.find(ErrPage)).toHaveLength(0);
    });

    it('should not render ErrPage when hasErr = false',()=>{
        const wrapper = shallow(<ErrHandler/>);
        wrapper.instance().setState({hasErr : true});
        expect(wrapper.find(ErrPage)).toHaveLength(1);
    });
});
