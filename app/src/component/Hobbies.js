import React, { Component } from 'react'
import img from '../IMG_3233.jpg';

export default class Hobbies extends React.Component {
	render(){
		return(
			<div>
				<img className="img-Hobbies" src={img} alt="Map w/ Indian Ocean and La Réunion" />

				<h4>Trois centres d'intérets qui rythment ma vie :</h4>
				<ul>
					<li>Cuisine du monde !</li>
					<li>Voyages</li>
					<li>Nature & Culture</li>
				</ul>
			</div>
			);
	}
}