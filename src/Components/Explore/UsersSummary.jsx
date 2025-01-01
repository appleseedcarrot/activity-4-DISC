import { useEffect, useState } from "react";
import './UsersSummary.css'
import { Link } from "react-router-dom";

export default function UsersSummary() {

    // Array to store our users
    const [Users, setUsers] = useState([]);
    // Grab our users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://disc-assignment-5-users-api.onrender.com/api/users');
            const data = await response.json();
            setUsers(data);
            console.log(data);
        }
        fetchUsers();
    }, []
    );

    return (
        <div className={'users-summary'}>
            <h1 className={'user-heading'}> Users </h1>
            <div className={'user-brief'}>
                {Users.length === 0 ? (
                    <h2> Loading... </h2>
                ) : (
                Users.slice(0,5).map((user) => {
                    return (
                        <Link to={'/users/' + user.id} key={user.id}>
                            <div className={'user'}>
                                <img src="https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png" />
                                <h2> {user.firstname} {user.lastname} </h2>
                                <p> {user.graduationyear} </p> 
                            </div>
                        </Link>
                    )
                }
                ))}
            </div>
            <Link to="/users"> <button className="see-users"> See More Users </button> </Link>
        </div>
    );
}