import React from 'react'
import ItemList from '../item-list';
import HeroDetails from '../hero-details';
import SwapiService from '../../services/'

export default class extends React.Component{

    swapiService = new SwapiService()

    state = {
        selectedPerson: null
      }
    
      heroSelected = (id) => {
        this.setState({
          selectedPerson: id
        })
      }

    

    render(){
        const {selectedPerson} = this.state
        const {info} = this.props
        
        let heroInfo
        let personIdx
          
          switch (info) {
            case 'int':
              heroInfo = this.swapiService.getIntHeroes
              personIdx = 3
              break;
            case 'agi':
              heroInfo = this.swapiService.getAgiHeroes
              personIdx = 1
              break;
            case 'str':
              heroInfo = this.swapiService.getStrHeroes
              personIdx = 2
              break;
            default:
              heroInfo = this.swapiService.getAllHero
              personIdx = 1
          }


        return(
            <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
                heroSelected={(id)=>this.heroSelected(id)}
                getData={heroInfo}
              />
            </div>
            <div className="col-md-6">
              <HeroDetails 
                personId = {selectedPerson ? selectedPerson : personIdx}
                getData = {this.swapiService.getHero}
              />
            </div>
          </div>
        )
    }
}