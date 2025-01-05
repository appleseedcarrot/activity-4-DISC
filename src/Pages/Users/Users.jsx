import './Users.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {

    // Array to store our users
    const [Users, setUsers] = useState([]);
    // Grab our users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://roomboard-gn3ub8dz1-appleseedcarrots-projects.vercel.app/api/users/profiles');
            const data = await response.json();
            setUsers(data);
            console.log(data);
        }
        fetchUsers();
    }, []
    );

    // Loading screen
    if (Users.length === 0) {
        return (
            <h1> Loading </h1>
        );
    }
    return (
        <div>
            <h1> All Users </h1>
            <div className={'users-all'}>
                {Users.map((user) => {
                    return (
                        <Link to={'/users/profiles/' + user.id} key={user.id}>
                            <div className={'user'}>
                                <img src={user.profile_picture_url} />
                                <h2> {user.first_name} {user.last_name} </h2>
                                <p> {user.date_of_birth} </p> 
                            </div>
                        </Link>
                    )
                }
                )}
            </div>
        </div>
    );
}