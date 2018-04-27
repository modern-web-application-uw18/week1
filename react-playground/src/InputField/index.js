import React,{Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

class InputField extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        value: ''
      };
    }

    updateValue(event){
      event.preventDefault();
      console.log(event.target.value);
      this.setState({
        value: event.target.value
      });
    }

    render() {
        return (
          <div>
          <p>{this.state.value}</p>
              <label htmlFor={this.props.id}>{this.props.label} </label>
              <input id={this.props.id} onChange={this.updateValue.bind(this)} />
          </div>
        );
    }
}

InputField.propTypes = propTypes;
export default InputField;
