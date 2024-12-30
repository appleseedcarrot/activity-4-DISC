import './Homepage.css'

export default function Homepage() {
    
    return (
        <div className={'homescreen'}>
            <div className={'homescreen-left'}>
                <ul className={'homescreen-left-elements'}>
                <li> <h1> Share Your Setup. </h1></li>
                <li> <h1 id="find-heading"> Find your next Roommate </h1> </li>
                <li> <p>
                The right roommate can be hard to find. With RoomBoard, you can find someone with similar living styles to you!
                </p></li>
                <li> <button className={"create-profile"}>
                Create your Profile
                </button></li>
                </ul>
            </div>
            <div className={'image-container'}>
                    <img src='https://www.makerstations.io/content/images/2021/11/bram-small-bedroom-setup-room-1.jpeg' 
                    alt="top-room-setup"
                    className={"top-image"} />
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcEzcK4DmDL9gX3QmQgf0YsIe473DLq8Bgw&s' 
                    alt='bot-room-setup'
                    className={"bottom-image"} />
                </div>
        </div>
    );
}