import React from 'react'

import Header from '../header';
import RandomHero from '../random-hero';
import Heroes from './heroes'
import SwapiService from '../../services/'


import './app.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'



export default class extends React.Component {

  swapiService = new SwapiService()

  render(){

    return (
      <Router>
        <div className="container">
          <Header />
          <RandomHero />
          <Switch>
            <Route path='/' 
                  render={()=><h2 style={{textAlign:'center'}}>Welcome to HeroDB</h2>}
                  exact/>
            <Route path='/heroes' component={()=><Heroes/>}/>
            <Route path='/agiheroes/:id?' component={()=><Heroes info={'agi'}/>}/>
            <Route path='/strheroes/:id?' component={()=><Heroes info={'str'}/>}/>
            <Route path='/intheroes/:id?' component={()=><Heroes info={'int'}/>}/>
            {/* <Route path='/intheroes/:id' render={({match})=> {
              const {id} = match.params
              return <HeroDetails personId={id} getData = {this.swapiService.getHero}/>
            }}/> */}
            <Route render={()=><h2 style={{textAlign:'center'}}>Page not found</h2>}/>
          </Switch>
        </div>
      </Router>
    );
  }
};