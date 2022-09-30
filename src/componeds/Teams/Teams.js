import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Teams.css";
const Teams = () => {
    const [teams ,setTeams ] =useState([]);
    const [cart, setCard]= useState(0);
    useEffect (()=>{
     fetch(`data.json`)
     .then(res=>res.json())
     .then(data=>setTeams(data))

    },[])
   
    const handelAddToList =(time)=>{
        // console.log(time);
        const newCard = parseFloat(cart) + parseFloat(time)
        setCard(newCard);
        
    }
    console.log(cart)


    return ( 
        <div className='FullContainer'>
            <div className="teamContainer">
                {
                    teams.map(team=><Card
                    key={team.id}
                    team={team}
                    handelAddToList={handelAddToList}
                    ></Card>)
                }
            </div>
            <div className="cardContainer">
               <div className="card">
               <img src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t1.6435-9/117387157_101949744961852_3887774626452525390_n.jpg?stp=dst-jpg_s552x414&_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF7m103KutBENWnVoyPaHXBO3hOEz0cEDQ7eE4TPRwQNLpr7ZR92UGqD7nwr4SjSvxw-upHQ5Gy-X3rApFkCm0v&_nc_ohc=HlMmmoL449AAX-a8wen&_nc_ht=scontent.fjsr1-1.fna&oh=00_AT_wQibIBDfyT6y5OB8PY1qqPXqWDqAoDe9K-1yVrqjAIg&oe=635C9207" alt="" />
               <div>
               <h3>Chamok barmon</h3>
               <span>Gobindagonj, Gaibandha</span>
               </div>
               
               </div>
               <div className="details">
                <span className='left'>
                    <p>60Kg</p>
                    <p>Weight</p>
                </span>
                <span className='left'>
                    <p>6.5</p>
                    <p>Height</p>
                </span>
                <span className='left'>
                    <p>22</p>
                    <p>Age</p>
                </span>
               </div>
                     <div>
                        <h1>Add A Break</h1>
                        <div className='circle-break'>
                            <button className='circle'>10</button>
                            <button className='circle'>20</button>
                            <button className='circle'>19</button>
                            <button className='circle'>18</button>
                            <button className='circle'>11</button>
                            <button className='circle'>22</button>

                        </div>
                     </div>

               <div>
                <h1>Experice Details</h1>
                 <p className='experice'>Experice Time : {cart}</p>
                 <p className='experice'>Break Time : 0 Seconds</p>
                 <br /><br />
                 <button className='experice'>Activity Completed</button>
            </div>
            </div>
        </div>
    );
};

export default Teams;