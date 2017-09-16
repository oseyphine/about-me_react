import React, { Component } from 'react'
import img from '../Armoiries_Réunion.svg.png';


export default class Accueil extends React.Component{
	render(){

		return(
			<div>
				<h1>
					Enjoy your Visit!
				</h1>
				<img className="logo-accueil" src={img} alt="Blason de La Réunion" />
			</div>
			);
	}
}