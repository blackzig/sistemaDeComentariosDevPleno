/* global expect, jest, wrapper */

import React from 'react';
import {shallow, mount, render} from 'enzyme';
import NewComment from './NewComment';

describe('<NewComment />', () => {
    const postNewCommentMock = jest.fn();

    it('renders without crashing', () => {
        const wrapper = shallow(<NewComment postNewComment={postNewCommentMock} />);
        expect(wrapper.length).toBe(1);
    });
    it('handles enter', () => {
        const wrapper = mount(<NewComment postNewComment={postNewCommentMock} />);
        const eventMock = {
            keyCode: 13,
            preventDefault: jest.fn()
        };
        wrapper.instance().refs.comment.value = 'test';
        wrapper.instance().handleEnter(eventMock);
        expect(eventMock.preventDefault.mock.calls.length).toBe(1);
        expect(postNewCommentMock.mock.calls.length).toBe(1);
        expect(postNewCommentMock.mock.calls[0][0].comment).toBe('test');        
        expect(wrapper.instance().refs.comment.value).toBe('');
    });

});

