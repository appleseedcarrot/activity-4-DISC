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
                const response = await fetch('https://roomboard-gn3ub8dz1-appleseedcarrots-projects.vercel.app/api/users/profiles/' + userID);
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
            <img src={User.profile_picture_url}></img>
            <h1> {User.first_name} {User.last_name} </h1>
            <h2> {User.bio} </h2>
            <h2> {'Class of ' + User.graduation_year} </h2>
        </div>
    );
}