import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

class Sid extends React.Component{
	render(){
		return(
			<div>
				React text,{this.props.Name} 
			</div>
		)
	}
}

export default Sid;
