import { useEffect, useState } from "react";
import OptionBar from './OptionBar.jsx'
import Post from './Post.jsx'
import './Explore.css'

export default function Postings() {
    // Filters
    const [filters, setFilters] = useState([]);
    // Example Posts
    const [allPosts, setAllPosts] = useState([]);
    // The filtered posts
    const [filteredPosts, setFilteredPosts] = useState([]);

    // Toggle filters
    const toggleFilter = (filter) => {
    // Check if filter is selected
    if (filters.includes(filter)) {
        // Disable the filter by removing it from filters array
        let newFilters = filters.filter((f) => f != filter);
        setFilters(newFilters);
    }
    else {
        setFilters([...filters, filter]);
    }
    }

    // Fetch the posts from the database
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://roomboard-db.vercel.app/api/posts/");
                const data = await response.json();
                console.log(data);
                setAllPosts(data); // Set the posts data
                
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    // Change which listings are shown based on filter
    useEffect(() => {
        // Check if any filter is being applied
        if (filters.length === 0) {
            setFilteredPosts(allPosts);
        }
        else {
            // filter by what is selected
            const updatedPosts = allPosts.filter((post) => 
                filters.some((filter) => 
                post.genre === filter));
            setFilteredPosts(updatedPosts);
        }
    }, [filters, allPosts]
    );

    console.log(allPosts);

    // For testing purposes, let's see when filters are added or removed
    useEffect(() => {
    console.log(filters);
    }, [filters]
    );

    return (
        <div className={"recent-posts"}> 
            <h1> Recent Posts </h1>
            <OptionBar toggleFilter={toggleFilter} filters={filters}> </OptionBar>
            <div id='postGrid'>
            {filteredPosts.map((listing) => {
                return (
                        <Post filter={listing.genre} description={listing.description} picture_url={listing.picture_url} user_id={listing.user_id} key={listing.user_id}/>
                )
            })
            }
            </div>
        </div>
    );
}
