import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Accueil from './Accueil'
import Hobbies from './Hobbies'
import Objectifs from './Objectifs'
import Experiences from './Experiences'
import Educations from './Educations'

export default class Main extends React.Component{
	render(){
		return(
			<div>
				<Switch>
			      <Route exact path='/' component={Accueil}/>
			      <Route path='/hobbies' component={Hobbies}/>
			      <Route path='/objectifs' component={Objectifs}/>
			      <Route path='/experiences' component={Experiences}/>
			      <Route path='/educations' component={Educations}/>
				</Switch>
			</div>
		)
	}
}