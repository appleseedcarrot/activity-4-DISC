import { useEffect, useState } from 'react';
import './Post.css'

export default function Post({filter, description, picture_url, user_id}) {
  // Store user data in the post
  const [userData, setUserData] = useState(null);

  // Fetch user data from the user id given
  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await fetch("https://roomboard-db.vercel.app/api/users/profiles/" + user_id);
            const data = await response.json();
            console.log("user: ", data);
            setUserData(data[0]); // Set the posts data
            
        } catch (error) {
            console.error("Error fetching user from post:", error);
        }
    };
    fetchUser();
  }, []);

  if (!userData) {
    return (
      <div className={"post"}>
        Loading...
      </div>
    )
  }
  return (
    <div className={"post"}>
      <h3> {userData.first_name + " " + userData.last_name + "'s room"}</h3>
      <div> {description} </div> 
      <div className={"post-image"}> 
        <img src={picture_url} />
      </div>
      <div className={"post-filters"}> 
        <p> {filter} </p>
      </div> 
    </div>
  );
}