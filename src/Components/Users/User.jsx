import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './User.css'

export default function User() {
    // Store the specific user's data
    const [User, setUser] = useState(null);
    // Store user id so we can fetch it
    const { userID } = useParams()
    // Fetch user data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3005/users/' + userID);
                const data = await response.json();
                setUser(data[0]);
                console.log(data);
            }
            catch (error) {
                console.error('error fetching user data: ', error);
            }
        }

        if (userID) {
            fetchUser();
        }
    }, [userID]
    );

    console.log(User);

    if (!User) {
        return <h1>
            Loading...
        </h1>;
    }

    return (
        <div className="detailed-user">
            <img src={User.profilepictureurl != null ? User.profilepictureurl : 
                "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"}></img>
            <h1> {User.firstname} {User.lastname} </h1>
            <h2> {User.email} </h2>
            <h2> {'Class of ' + User.class} </h2>
        </div>
    );
}