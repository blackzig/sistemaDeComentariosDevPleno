import React, {Component} from 'react';

const Comment = props =>
    <p className="well">
        {props.comment.comment}<br/>
        <b>por: {props.comment.user.name}</b>
    </p>;

export default Comment