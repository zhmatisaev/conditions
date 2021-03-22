import React from 'react'
import css from './Card.module.css'


const Card = (props) =>{

    const {full_name, position,id} = props 




const avatar_style = {
        border: '1px solid black', 
        borderRadiuce: '5px',
        height: 100,
        width: 100,
        backgroundColor: 'green'
        
}

    return (
        <div className={css.card}>
               
            <div 
                style={avatar_style} >
            </div>

            <div className='descriptoin'>
                <h2>{full_name}</h2>
                <b>{position}</b>
                <p>{id}</p>
            </div>
        </div>
    )
}

export {Card}