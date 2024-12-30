import './Homepage.css'

export default function Homepage() {
    
    return (
        <div class='homescreen'>
            <div class='homescreen-left'>
                <ul class='homescreen-left-elements'>
                <li> <h1> Share Your Setup. </h1></li>
                <li> <h1 id="find-heading"> Find Your Next Roommate </h1> </li>
                <li> <p>
                The right roommate can be hard to find. With RoomBoard, you can find someone with similar living styles to you!
                </p></li>
                <li> <button class="create-profile">
                Create your Profile
                </button></li>
                </ul>
            </div>
            <div class='image-container'>
                    <img src='https://www.makerstations.io/content/images/2021/11/bram-small-bedroom-setup-room-1.jpeg' 
                    alt="top-room-setup"
                    class="top-image" />
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcEzcK4DmDL9gX3QmQgf0YsIe473DLq8Bgw&s' 
                    alt='bot-room-setup'
                    class="bottom-image" />
                </div>
        </div>
    );
}