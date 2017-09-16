import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component{
	render(){
		return(
			<div>
			    <nav>
			      <ul>
			        <li><Link to='/'> > Home_.</Link></li>
			        <li><Link to='/hobbies'> >> Hobbies_.</Link></li>
			        <li><Link to='/objectifs'> >> Life goals_.</Link></li>
			        <li><Link to='/educations'> >> Educations_.</Link></li>
			        <li><Link to='/experiences'> >> Experiences_.</Link></li>
			      </ul>
			    </nav>
	        </div>
		);
	}
}