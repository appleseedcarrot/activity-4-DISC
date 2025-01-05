
import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";

export default function CreatePost() {
    // State for post information
    const [category, setCategory] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Get the auth token
        const token = localStorage.getItem("authToken");
        
        // Prepare form data to send as multipart form data
        const formData = new FormData();
        formData.append("category", category);
        formData.append("content", content);
        if (image) formData.append("image", image);

        try {
            const response = await fetch("https://roomboard-db.vercel.app/api/posts/", {
                method: "POST",
                headers: {
                    "Authorization": token ? `Bearer ${token}` : "",
                },
                body: formData,
            });

            const data = await response.json();

            if (data.error) {
                alert("Error creating post: " + data.error);
            } else {
                alert("Post created successfully!");
            }
        } catch (error) {
            console.error("Error creating post:", error);
            alert("Error creating post. Please try again.");
        }
    };

    // Change image when added to the input
    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <div className="create-post">
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Genre:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Natural">Natural</option>
                        <option value="Modern">Modern</option>
                        <option value="Futuristic">Futuristic</option>
                    </select>
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        onChange={(e) => {handleFileInput}}
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}