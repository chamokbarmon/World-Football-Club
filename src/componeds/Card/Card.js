import React from 'react';
import './Card.css';
const Card = (props) => {
    
    const {img, name , time ,button}=props.team ;

    return (
        <div >
            <div className='cards'>
            <img src={img} alt="" />
             <p className='card-name'>Name :{name}</p>
             <p className='card-time'>Time :{time}</p>
             <button onClick={()=>props.handelAddToList(time)} className='button-card'>{button}</button>
            </div>
            
        </div>
    );
};

export default Card;