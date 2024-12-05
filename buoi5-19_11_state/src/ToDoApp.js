import {Component, Fragment} from "react";


class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            todos: ["Học HTML"],
        };
    }

    handleChange = (event) => {
        this.setState({todo: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                todos: [...this.state.todos, this.state.todo],
                todo: ""
            }
        );
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" id="name" value={this.state.todo}
                           placeholder="name"/>
                    <button type="submit">Add</button>
                </form>
                <ol>
                    {this.state.todos.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                    }
                </ol>
            </div>
        )
    }
}

export default ToDoApp;