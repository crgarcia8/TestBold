import './Card.scss';
import React from 'react'

const Card = (props) => (
    <div className={"card " + props.className}>
        <header className="card-header">
            <div className="card-header-title">
                {props.header}
            </div>
        </header>
        <div className="card-content">
            <div className="content">
                {props.content}
            </div>
        </div>
    </div>
)

export default Card;