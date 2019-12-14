import React from 'react'
import './index.css'

export const Button = (props) =>{
    return (
        <div 
        {...props}
        className={props.full?'button':'sbscrb'}
        >
            { props.title }
        </div>
    )
}