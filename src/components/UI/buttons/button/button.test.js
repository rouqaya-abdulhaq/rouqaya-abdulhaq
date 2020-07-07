import React from 'react';
import {shallow} from 'enzyme';
import Button from './button';

describe('<Button/>',()=>{
    it('should not be diapled',()=>{
        const wrapper = shallow(<Button/>);
        expect(wrapper.hasClass('disapled')).toEqual(false);
      }
    );

    it('should not be diapled',()=>{
        const wrapper = shallow(<Button disapled={false}/>);
        expect(wrapper.hasClass('disapled')).toEqual(false);
      }
    );

    it('should be diapled',()=>{
        const wrapper = shallow(<Button disapled={true}/>);
        expect(wrapper.hasClass('disapled'));
      }
    );
});