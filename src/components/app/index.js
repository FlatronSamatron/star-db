import React from 'react'

import Header from '../header';
import RandomHero from '../random-hero';
import ItemList from '../item-list';
import HeroDetails from '../hero-details';
import Heroes from './heroes'

import SwapiService from '../../services/'

import './app.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'



export default class extends React.Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: null
  }

  heroSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  // Allheroes = (info) => {

  //   const {selectedPerson} = this.state

  //   let heroInfo
  //   let personId
    
  //   switch (info) {
  //     case 'int':
  //       heroInfo = this.swapiService.getIntHeroes
  //       personId = {selectedPerson ? selectedPerson : 3}
  //       break;
  //     case 'agi':
  //       heroInfo = this.swapiService.getAgiHeroes
  //       break;
  //     case 'str':
  //       heroInfo = this.swapiService.getStrHeroes
  //       break;
  //     default:
  //       heroInfo = this.swapiService.getHero
  //   }

  //   return (
  //     <Heroes 
  //             heroSelected={(id)=>this.heroSelected(id)}
  //             getDataAll={heroInfo}
  //             personId = {selectedPerson ? selectedPerson : 1}
  //             getData={this.swapiService.getHero}
  //           />
  //   );
  // }

  render(){

    const {selectedPerson} = this.state

    return (
      <Router>
        <div className="container">
          <Header />
          <RandomHero />
          <Route path='/heroes' component={()=>{
            return <Heroes 
            heroSelected={(id)=>this.heroSelected(id)}
            getDataAll={this.swapiService.getAllHero}
            personId = {selectedPerson ? selectedPerson : 1}
            getData={this.swapiService.getHero}
          />
          }}/>
            {/* <Route path='/heroes' component={()=>this.Allheroes()}/>
            <Route path='/agiHeroes' component={()=>this.Allheroes('agi')}/>
            <Route path='/intHeroes' component={()=>this.Allheroes('int')}/>
            <Route path='/strHeroes' component={()=>this.Allheroes('str')}/> */}
          {/* <Heroes 
            heroSelected={(id)=>this.heroSelected(id)}
            getDataAll={this.swapiService.getAllHero}
            personId = {selectedPerson ? selectedPerson : 1}
            getData={this.swapiService.getHero}
          /> */}
          
          {/* <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
                heroSelected={(id)=>this.heroSelected(id)}
                getData={this.swapiService.getAllHero}
              />
            </div>
            <div className="col-md-6">
              <HeroDetails 
                personId = {selectedPerson ? selectedPerson : 1}
                getData = {this.swapiService.getHero}
              />
            </div>
          </div>

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
                heroSelected={(id)=>this.heroSelected(id)}
                getData={this.swapiService.getAgiHeroes}
              />
            </div>
            <div className="col-md-6">
            <HeroDetails 
              personId = {selectedPerson ? selectedPerson : 1}
              getData = {this.swapiService.getHero}
            />
            </div>
          </div>

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
              heroSelected={(id)=>this.heroSelected(id)}
              getData={this.swapiService.getStrHeroes}
              />
            </div>
            <div className="col-md-6">
            <HeroDetails 
              personId = {selectedPerson ? selectedPerson : 2}
              getData = {this.swapiService.getHero}
            />
            </div>
          </div>

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
              heroSelected={(id)=>this.heroSelected(id)}
              getData={this.swapiService.getIntHeroes}
              />
            </div>
            <div className="col-md-6">
            <HeroDetails 
              personId = {selectedPerson ? selectedPerson : 3}
              getData = {this.swapiService.getHero}
            />
            </div>
          </div> */}

        </div>
      </Router>
    );
  }
};