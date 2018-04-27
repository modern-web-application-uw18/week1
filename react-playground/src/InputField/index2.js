import React,{Component} from 'react';

export default class InputField extends Component {
constructor(props){
	super(props);
	this.state = {
    value: ''
  };
}

    render() {
        return (
            <div className="class-name">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id}/>
            </div>
        );
    }
}
