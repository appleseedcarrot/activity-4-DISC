import { useCallback, useEffect, useMemo, useState } from "react";
import OptionBar from './OptionBar.jsx'
import Post from './Post.jsx'
import './Explore.css'
import { useFilteredPosts } from '../useFilteredPosts.jsx'

export default function Postings() {
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
    // New custom hook
    const { filteredPosts, toggleFilter, filters } = useFilteredPosts(posts);

    return (
        <div className={"recent-posts"}> 
            <h1> Recent Posts </h1>
            <OptionBar toggleFilter={toggleFilter} filters={filters}> </OptionBar>
            <div id='postGrid'>
            {filteredPosts.map((listing) => {
                return (
                <Post filter={listing.category} key={listing.id} />
                )
            })
            }
            </div>
        </div>
    );
}
