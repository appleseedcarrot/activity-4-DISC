import { useEffect, useState } from "react";
import './UsersSummary.css'
import { Link } from "react-router-dom";

export default function UsersSummary() {

    // Array to store our users
    const [Users, setUsers] = useState([]);
    // Grab our users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://roomboard-db-git-main-appleseedcarrots-projects.vercel.app/api/users/');
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
                            <img src={user.profilepictureurl != null ? user.profilepictureurl : "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"} />
                            <h2> {user.firstname} {user.lastname} </h2>
                            <p> {user.class} </p> 
                        </div>
                    </Link>
                )
            }
            )}
            </div>
            <Link to="/users"> <button className="see-users"> See More Users </button> </Link>
        </div>
    );
}