import React from 'react';

class Field extends React.Component {
    constructor(props) {
        super(props)
        console.log('here are my fucking props: ',props)
    this.state = {
        inputValue: ''
    }

        //when the search is pressed
        //grab that value
        //query the database for whether or not I've reviewed the album before
        //if I have
        //retrieve that album
        //i I haven't
        //go get it from discogs
   }
    updateInputValue(evt){
        this.setState({
            inputValue: evt.target.value
        });
    };
        
    
    render () {
        return (
    <div>
      <h4> Input Field </h4>
      <form className='searchBar'> 
          <input type='text' value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} onClick={()=>this.props.searchEvent(this.state.inputValue)}></input>
          <button className='searchSubmit' onClick={()=>this.props.searchEvent(this.state.inputValue)}/>
      </form>
      
    </div>
  )
}

}

export default Field;