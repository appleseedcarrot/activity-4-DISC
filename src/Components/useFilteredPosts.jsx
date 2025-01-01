import {useCallback, useEffect, useState} from 'react';

export function useFilteredPosts(posts) {
    // our filters
    const [filters, setFilters] = useState([]);
    // our filtered posts
    const [filteredPosts, setFilteredPosts] = useState(posts);
    // Toggle filters
    const toggleFilter = useCallback((filter) => {
        // Check if filter is selected
        if (filters.includes(filter)) {
            // Disable the filter by removing it from filters array
            let newFilters = filters.filter((f) => f != filter);
            setFilters(newFilters);
        }
        else {
            // FILTER IS ADDED TO THE END OF THE ARRAY here...
            setFilters([...filters, filter]);
        }
    });
    // Add or remove filters when they the filter buttons are clicked on
    useEffect(() => {
        // Check if any filter is being applied
        if (filters.length === 0) {
            setFilteredPosts(posts);
        }
        else {
        // filter by what is selected
            const updatedPosts = posts.filter((post) => 
                filters.some((filter) => 
                post.category === filter));
            setFilteredPosts(updatedPosts);
        }
    }, [filters]
    );
    // For testing purposes, let's log when filters are added or removed, and show their values
    useEffect(() => {
        console.log(filters);
        }, [filters]
    );

    return { filteredPosts, toggleFilter, filters };
}