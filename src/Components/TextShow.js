import React from 'react';
import PropTypes from 'prop-types';

const TextShow = (props: {text: string}) => (
    <h1>{props.text}</h1>  
)

TextShow.propTypes = {
    text: PropTypes.string.isRequired
}

export default TextShow