import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props: {text:sting, index:number,onItemClick: Function}) => {

    const handleClick = () => {
        props.onItemClick(props.index)
    }

    return <li onClick={handleClick}>{props.text}</li>
}

TodoItem.PropTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onItemClick: PropTypes.func,
}

export default TodoItem