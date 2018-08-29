import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Field from './components/Field.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      userInput: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleUserInput(text){
    event.preventDefault()
    console.log('I FUCKIN PASSED THE FUNCTION DOWN, HERE IS THE TEXT: ',text)
    
    this.setState({
      userInput: text
    })

    axios.get('dicgosAPIhere').then(response => console.log('here is my response: ',response)
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
      <Field searchEvent={this.handleUserInput}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));