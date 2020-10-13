import React from  'react'

export default ({hero}) => {

    const {name,attackType,role,atr,img} = hero
    return(
        <>
        <img className="planet-image"
                src={img} />
            <div>
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
                <span>{atr === 'int' ? 'Intelligence' : atr === 'agi' ? 'Agility' : 'Strength' }</span>
                </li>
            </ul>
            </div>
        </>
    )
}