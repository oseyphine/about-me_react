import React, { Component } from 'react'
import img from '../IMG_3233.jpg';

export default class Experiences extends React.Component {
	render(){
		return(
			<div>
				<img className="img-Hobbies" src={img} alt="Map w/ Indian Ocean and La Réunion" />

				<h4>Expériences internationnales LONDON + PARIS + LA RÉUNION</h4>
				<ul>
					<li>Stage immersif : Développeuse Web Junior fullstack JS w/ Red Samraï | 2017</li>
					<li>Assistante de manager w/ The Dictionary Hostel | 22016</li>
					<li>Réception w/ Palmers Lodge Swiss Cottage | 2014</li>
					<li>Réception w/ YHA London Central | 2013</li>
					<li>Assistante Gouvernate des Lieux Publics w/ Radisson Blu @Disneyland Paris | 2011</li>
					<li>Stage de découverte : Réception, Étages, Cuisine, Restauration, Séminaires & Banquets w/ Pullman Roissy Charles de Gaulle | 2010</li>

				</ul>
			</div>
			);
	}
}