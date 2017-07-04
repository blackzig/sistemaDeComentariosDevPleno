/* global expect, jest, wrapper, comments */

import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Comments from './Comments';

describe('<Comments />', () => {
    it('renders without crashing', () => {
        const comments = {
            1: {
                comment: 'test1'
            },
            2: {
                comment: 'test2'
            }
        };
        const wrapper = shallow(<Comments comments={comments} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('Comment').length).toBe(2);
    });
});

