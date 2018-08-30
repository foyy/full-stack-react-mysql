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
    //this will auto get my albums. Save for later
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  handleUserInput(text){
    console.log('HERE IS THE user INPUT: ',text)
    
    event.preventDefault()
    
    this.setState({
      userInput: text
    })

    $.ajax({
      url:'/items',
      method: 'POST',
      data: {text:text},
      success: function (returnedData){
        console.log('I CLICKED AND POST REQUEST TO ITEMS COMPLETE BOIIII')
        
        console.log('here is my react returnedData: ',returnedData)
      },
      error: function (errorThrown) {
        console.log('POST REQUEST FROM CLICKING SEARCH FAILED, RIP :',errorThrown)
      }
    })
    
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