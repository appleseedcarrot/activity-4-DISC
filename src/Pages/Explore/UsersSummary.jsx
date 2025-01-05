import { useEffect, useState } from "react";
import './UsersSummary.css'
import { Link } from "react-router-dom";

export default function UsersSummary() {

    // Array to store our users
    const [Users, setUsers] = useState([]);
    // Grab our users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://roomboard-db-git-main-appleseedcarrots-projects.vercel.app/api/users/profiles');
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
            {Users.slice(0,5).map((user) => {
                return (
                    <Link to={'/users/' + user.id} key={user.id}> 
                        <div className={'user'}>
                            <img src={user.profile_picture_url} />
                            <h2> {user.first_name} {user.last_name} </h2>
                            <p> {user.graduation_year} </p> 
                        </div>
                    </Link>
                )
            }
            )}
            </div>
            <div>
                <Link to="/users"> <button className="see-users"> See More Users </button> </Link>
                <Link to="/update-profile"> <button className="see-users"> Set up your profile </button></Link>
            </div>
            
        </div>
    );
}