import './Tab.css';
import React from "react"
import PropTypes from 'prop-types';


const Tab = (props) => {
    const handleOnClick = (event) => event.preventDefault();

    return (
        <li className={(props.isActive) ? 'is-active' : ''} onClick={props.onClick} >
            <a href="/#" onClick={(e) => handleOnClick(e)}>
                <span>{props.name}</span>
            </a>
        </li >
    )
}
Tab.propTypes = {
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default Tab;