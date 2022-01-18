import {useEffect, useState} from "react";
import User from "./User";
import "./Users.css";
export default function Users(){

    let [users,setUsers]=useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    },[]);
    return(
        <div className="users">
            <ul>
                {
                    users.map(value => <li key={value.id}> <User  item={value}/> </li> )
                }
            </ul>

        </div>
    );
}