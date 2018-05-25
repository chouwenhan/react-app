import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
    state: {
        items: Array<string>,
        inputValue: string,
    }

    constructor(props: Props) {
        super(props)

        this.state = {
            items: [],
            inputValue:'',
        }
    }

    handleChange = (e: Event) => {
      if (e.target instanceof HTMLInputElement) {
        this.setState({
          inputValue: e.target.value,
        })
      }
    }

    handleKeyPress = (e: KeyboardEvent) => {
        if(e.key === 'Enter' && e.target instanceof HTMLInputElement){
            const newItems = [e.target.value, ...this.state.items ]
            console.log(newItems)
            this.setState({
                itmes: newItems,
                inputValue: '',
            })
        }
    }

    handleRemoveItem = (index: number) => {
        const oldItems = this.state.items
        const newItems = oldItems.slice(0,index).concat(oldItems.slice(index+1))

        this.setState({
            items: newItems,
        })
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.inputValue}
                       placeholder={this.props.initText}
                       onKeyPress={this.handleKeyPress}
                       onChange={this.handleChange}
                />
                <ul>
                {
                    this.state.items.map((value,index) => {
                        return <TodoItem key={index} text={value} onItemClick={this.handleRemoveItem}/>
                    })
                }
                </ul>
            </div>
        )
    }
}

TodoList.propTypes = {
    initText: PropTypes.string,
}

export default TodoList