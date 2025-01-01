import { useEffect, useMemo, useState } from "react";
import OptionBar from './OptionBar.jsx'
import Post from './Post.jsx'
import './Explore.css'

export default function Postings() {
    // Filters
    const [filters, setFilters] = useState([]);
    // Example Posts => Changeed to useMemo only at the beginning so the posts are technically cached.
    const posts = useMemo(() => {
    return [
    { id: 1, category: 'Gaming'},
    { id: 2, category: 'Natural'},
    { id: 3, category: 'Modern'},
    { id: 4, category: 'Futuristic'},
    { id: 5, category: 'Natural'},
    { id: 6, category: 'Natural'},
    { id: 7, category: 'Gaming'},
    { id: 8, category: 'Futuristic'},
    { id: 9, category: 'Gaming'},
    { id: 10, category: 'Natural'},
    ]
        }, []);
    // The filtered posts
    const [filteredPosts, setFilteredPosts] = useState([allPosts]);

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
            post.category === filter));
        setFilteredPosts(updatedPosts);
        }
    }, [filters]
    );

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
                <Post filter={listing.category}> </Post>
                )
            })
            }
            </div>
        </div>
    );
}
