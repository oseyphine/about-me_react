import React, { Component } from 'react'
import img from '../LanterneValou.jpg';

export default class Objectifs extends React.Component{
	render() {
		return(
			<div>
				<img className="img-Hobbies" src={img} alt="Light lantern" />
				<h4>Trois objectifs que je garde en ligne de mire :</h4>
				<ul>
					<li>Entreprendre !</li>
					<li>Ouvrir des auberges de jeunesse dans mon île</li>
					<li>Encore et toujours apprendre !</li>
				</ul>
			</div>
			);
	}
}