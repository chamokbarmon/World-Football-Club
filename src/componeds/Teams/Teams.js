import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Teams.css";
const Teams = () => {
    const [teams ,setTeams ] =useState([]);
    useEffect (()=>{
     fetch(`data.json`)
     .then(res=>res.json())
     .then(data=>setTeams(data))

    },[])
    
    const [card ,setCard] =useState([]);
    const addToList =(team) =>{
     const newCard = [...card,team]
     setCard(newCard)
    }

    return ( 
        <div className='FullContainer'>
            <div className="teamContainer">
                {
                    teams.map(team=><Card
                    key={team.id}
                    team={team}
                    addToList={addToList}
                    ></Card>)
                }
            </div>
            <div className="cardContainer">
               <h3>This is a card</h3>
            </div>
        </div>
    );
};

export default Teams;