import React, { Component } from 'react';
import SwapiService from '../../services/'
import './random-hero.css';
import Spinner from '../spinner/'
import HeroView from './hero-view'

export default class extends Component {

  swapiService = new SwapiService()

    state={
        hero: {},
        loading: true
    }

    componentDidMount(){
      setInterval(()=>this.updateHero(), 2500)
    }

    onHeroLoaded = (hero) => {
      this.setState({hero , loading: false})
    }

    updateHero = () => {
      let id = Math.floor(Math.random()*129 + 1);
      this.swapiService
      .getHero(id).then(hero=>this.onHeroLoaded(hero))
    }

  render() {

    const {hero, loading} = this.state

    const spinner = loading ? <Spinner/> : <HeroView hero = {hero}/>

    return (
      <div className="random-planet jumbotron rounded">
          {spinner}
      </div>
    );
  }
}

