import { useState } from "react";

export default function UpdateProfile() {
    // State for post information
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Get the auth token
        const token = localStorage.getItem("authToken");
        
        // Prepare form data to send as multipart form data
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("bio", bio);
        if (image) formData.append("profilePicture", profilePicture);

        try {
            const response = await fetch("http://localhost:3005/api/users/profile", {
                method: "PUT",
                headers: {
                    "Authorization": token ? `Bearer ${token}` : "",
                },
                body: formData,
            });

            const data = await response.json();

            if (data.error) {
                alert("Error updating profile: " + data.error);
            } else {
                alert("Profile updated successfully!");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Error updating profile. Please try again.");
        }
    };

    return (
        <div>
            <h1>Update your Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Profile Picture:</label>
                    <input
                        type="file"
                        onChange={(e) => setProfilePicture(e.target.files[0])}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}