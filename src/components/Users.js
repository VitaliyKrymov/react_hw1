import {useEffect, useState} from "react";


const Users = () => {

    const [users,setUsers]= useState([],);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

    return (
        <div>
            {users.map(value => JSON.stringify(value))}
        </div>
    );
};

export default Users;