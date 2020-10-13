import React from 'react'
import ItemList from '../item-list';
import HeroDetails from '../hero-details';

export default ({heroSelected,getDataAll,personId,getData}) => {
    return(
        <div className="row mb2">
            <div className="col-md-6">
              <ItemList 
                heroSelected={heroSelected}
                getData={getDataAll}
              />
            </div>
            <div className="col-md-6">
              <HeroDetails 
                personId = {personId}
                getData = {getData}
              />
            </div>
          </div>
    )
}