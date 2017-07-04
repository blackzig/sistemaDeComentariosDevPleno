/* global expect, jest, wrapper */

import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Comment from './Comment';

describe('<Comment />', () => {
    it('renders without crashing', () => {
        const comment = {comment: 'test'};
        const wrapper = shallow(<Comment comment={comment} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.is('.well')).toBe(true);
        expect(wrapper.text()).toBe(comment.comment);
    });
});

