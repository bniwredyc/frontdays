import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleSave = text => {
        if (text.length !== 0) {
            console.time('dispatch')
            for (let i = 0; i < 10000; i++) {
                this.props.addTodo(text)
            }
            console.timeEnd('dispatch')
            this.props.resetTodo();
        }
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput newTodo
                               onSave={this.handleSave}
                               placeholder="What needs to be done?"/>
            </header>
        )
    }
}
