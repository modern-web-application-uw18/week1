import React,{Component} from 'react';

class Counter extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      counter: 0
    };
  }

increment(){
  this.setState({
    counter: this.state.counter + 1
  })
}

    render() {
        return (
          <div>
            <p>hello world {this.state.counter}</p>
            <button onClick={this.increment.bind(this)}>Increment</button>
          </div>
        );
    }
}

export default Counter;
