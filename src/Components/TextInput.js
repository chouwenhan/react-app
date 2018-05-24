import React from 'react';
import TextShow from './TextShow.js';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
    state: {
        text: string, 
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            text: '',
        }
    }

    handleChange = (e:Event) => {
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.text}
                       placeholder={this.props.initText}
                       onChange={this.handleChange}
                />
                <TextShow text={this.state.text}/>
            </div>
        )
    }
}

TextInput.propTypes = {
  initText: PropTypes.string,
}

export default TextInput