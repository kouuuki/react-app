import React from 'react'
import ReactDOM from 'react-dom'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  changeChecked() {
    this.setState({checked: !this.state.checked})
    console.log(this.setState)
  }

  render() {
    return (
      <ul>
        <span onClick={this.changeChecked.bind(this)}>
          {this.state.checked
            ? <i className="fas fa-check-circle" />
            : <i className="fas fa-circle" />
          }
        </span>
        {this.props.title}
      </ul>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tasks: ["掃除", "洗濯", "散歩"],
        inputText: "",
      }
  }

  handleChangeText(event) {
    this.setState({inputText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.inputText == "") {
      return
    }

    const newTask = this.state.tasks
    newTask.push(this.state.inputText)
    this.setState({
      tasks: newTask,
      inputText: "",
    })
  }

  render() {
    return(
      <div className="tasks">
        <h1>マイたすく</h1>
        <p>一覧</p>
        {this.state.tasks.map((task, index) => {
          return (
            <List key={`list-${index}`} title={task} />
          )
        })}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            value={this.state.inputText}
            onChange={this.handleChangeText.bind(this)}
          />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
