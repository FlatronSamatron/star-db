import React, { Component } from 'react';
import Spinner from '../spinner/'
import Pagination from '../pagination/'
import img from './dota-2.png'
import {withRouter} from 'react-router-dom'

import './item-list.css';

class ItemList extends Component {

  

  state = {
    heroList: null,
    start:0,
    finish:10
  }

  componentDidMount(){

    const {getData} = this.props

    getData().then(heroes => this.setState({heroList:heroes}))
  }

  renderItems(arr){

    const {start,finish} = this.state;

    let items =  arr.map(({id,name,icon})=>{
      return(
        <li className="list-group-item d-flex" 
        key={id}
        onClick={()=>this.props.heroSelected(id)}
        >
          {name}
          <img style={{marginLeft:'auto'}} src={id === 126 || id === 128 ? img : icon} alt="img"/>
        </li>
        )
      })
      return items.slice(start,finish)
  }

  paginationCnt = (el) => {

    let cnt = el.innerText

    if(cnt === 'All'){
      this.setState({
        start:0,
        finish:this.state.heroList.length
      })
    } else {
      let start = cnt.split('-')[0]-1;
      let finish = cnt.split('-')[1];
      this.setState({
        start:start,
        finish:finish
      })
    }
  }

  render() {

    const {heroList} = this.state;

    if(!heroList){
      return <Spinner/>
    }

    const items = this.renderItems(heroList);


    return (
      <div>
        <ul className="item-list list-group">
          {items}
        </ul>
        <Pagination 
        paginationCnt = {(cnt)=>this.paginationCnt(cnt)}
        heroList = {this.state.heroList}
        />
      </div>
    );
  }
}

export default withRouter(ItemList)