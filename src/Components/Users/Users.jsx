import './Users.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {

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
                        <Link to={'/users/' + user.id}>
                            <div className={'user'}>
                                <img src={user.profilepicture != null ? user.profilepicture : "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"} />
                                <h2> {user.firstname} {user.lastname} </h2>
                                <p> {user.graduationyear} </p> 
                            </div>
                        </Link>
                    )
                }
                )}
            </div>
        </div>
    );
}