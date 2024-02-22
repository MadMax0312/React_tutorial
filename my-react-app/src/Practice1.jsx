import React, {useState} from "react";

function Practice1(props) {

    return (
        <div className="app">
            <div className="profile-card">
                <h1>{props.name}</h1>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )

}

export default Practice1