import React, { Component } from 'react'
import img from '../IMG_3233.jpg';

export default class Educations extends React.Component {
	render(){
		return(
			<div>
				<img className="img-Hobbies" src={img} alt="Map w/ Indian Ocean and La Réunion" />

				<h4>Niveau d'études Bac+5 & Formations</h4>
				<ul>
					<li>Développeuse Web Junior fullstack JS w/ Simplon Réunion | 2017</li>
					<li>Master : Management & Ingénierie du Tourisme w/ IAE RÉUNION | 2016</li>
					<li>Licence : Gestion des Activités Touristiques w/ IAE RÉUNION | 2014</li>
					<li>BTS Hôtellerie-Restauration, option : Gestion et Marketing hôtelier w/ Lycée Professionnel Hôtelier «La Renaissance» | 2013</li>
					<li>MAN Hôtellerie-Restauration w/ Lycée Professionnel Hôtelier «La Renaissance» | 2011</li>
					<li>Baccalauréat Scienctifiques, option : Physique-Chimie, mention eurpéenne : Allemand w/ Lycée de La Possession | 2010</li>
				</ul>
			</div>
			);
	}
}