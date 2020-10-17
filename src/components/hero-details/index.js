
import React, { Component } from 'react';
import SwapiService from '../../services/'
import {withRouter} from 'react-router-dom'

import './hero-details.css';

class PersonDetails extends Component {

  swapiService = new SwapiService()

  state = {
    hero: null
  }

  componentDidMount(){
    this.updateHero()
  }

  componentDidUpdate(prevProps,prevState){
    if(prevProps.personId !== this.props.personId){
      this.updateHero()
    }
  }

  // componentDidUpdate(prevProps,prevState){
  //   if(prevState.hero !== this.state.hero){
  //     this.updateHero()
  //   }
  // }

  updateHero(){
    // const {id} = this.props.match.params
    const {personId,getData} = this.props;
    
    if(!personId){
      return
    }

    getData(personId).then(hero => {
      this.setState({
        hero
      })
    })

  }

  render() {

    if(!this.state.hero){
      return <span style={{alignItems:'center'}}>Select a person from a list</span>
    }

    const {name,attackType,role,atr,img} = this.state.hero


    return (
      <div className="person-details card">
        <img className="person-image"
          src={img} alt="img"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Attack type:</span>
              <span>{attackType}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Role:</span>
              <span>{role}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Attribute:</span>
              <span>{atr}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(PersonDetails)