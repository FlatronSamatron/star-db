import React, { Component } from 'react';

import './pagination.css';

export default class extends Component {


  state = {
    heroList: this.props.heroList,
    active: 10
  }


  activeLi = (el,i) => {
    this.props.paginationCnt(el);
    this.setState({active: i})
  }


  pagination(){

    const {active} = this.state

    let pagLength = this.state.heroList.length

    let pag = []

    for(let i=0; i<pagLength; i++){
      if(i===pagLength-1){
        pag.push(<li key = {i} 
            className={i === active ? "list-group-item pag active" : "list-group-item pag"} 
            onClick={(el)=>this.activeLi(el.target,i)}>
                {i-7}-{i+1}
            </li>)
      }
      if(i%10 === 0 && i!==0){
        pag.push(<li key = {i} 
            className= {i === active ? "list-group-item pag active" : "list-group-item pag"} 
            onClick={(el)=>this.activeLi(el.target,i)}>
                {i-9}-{i}
            </li>)
      }
      }
    //   pag.push(<li key = {'all'} className="list-group-item pag">All</li>)
    return pag
  }

  render() {

    const {active} = this.state

    const pag = this.pagination()
    const pag1 = pag.slice(0,pag.length/2)
    const pag2 = pag.slice(pag.length/2)

    return (
        <div className="mt-4 mb-4">
            <ul className="item-list list-group list-group-horizontal">
                {pag1}
            </ul>
            <ul className="item-list list-group list-group-horizontal">
                {pag2}
            </ul>
            <ul className="item-list list-group list-group-horizontal">
                <li className={active === 'all' ? "list-group-item pag active" : "list-group-item pag"}  
                onClick={(el)=>this.activeLi(el.target,'all')}>
                    All
                </li>
            </ul>
        </div>
    );
  }
}