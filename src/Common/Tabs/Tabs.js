import React from "react"

const Tabs = (props) => {
    return (
        <div className="tabs is-toggle is-toggle-rounded is-centered">
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export default Tabs