import React from "react";

// const User = (props) => {
const User = ({name,age,date}) => {

    return(
        <div>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            {/*<p>It's {props.date}</p>*/}
            <p>It's {date}</p>

        </div>
    )
};

export default User;