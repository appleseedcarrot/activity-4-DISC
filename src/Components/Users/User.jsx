import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
    // Store the specific user's data
    const [User, setUser] = useState(null);
    // Store user id so we can fetch it
    const { userID } = useParams()
    // Fetch user data
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('https://disc-assignment-5-users-api.onrender.com/api/users/' + userID);
                const data = await response.json();
                setUser(data);
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

    if (!User) {
        return <h1>
            Loading...
        </h1>;
    }

    return (
        <div className="detailed-user">
            <img src={User.profilepicture != null ? User.profilepicture : 
                "https://winaero.com/blog/wp-content/uploads/2018/08/Windows-10-user-icon-big.png"}></img>
            <h1> {User.firstname} {User.lastname} </h1>
            <h2> {User.bio != null ? User.bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} </h2>
            <h2> {User.email} </h2>
            <h2> {'Class of ' + User.graduationyear} </h2>
            <h2> {User.major} </h2>
        </div>
    );
}