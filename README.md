# Homework 6 

- All maps now use a key for each child element of either userid or the id from the example posts array.
- All arrays had already appended new elements to the end
- useRef wasn't really used, had no beneficial place to use one
- useMemo is now being used in (2) places? The posts array has been converted to useMemo and I might have used it somewhere else too.
- useCallback was used for a lot of the functions that didn't need to be recalculated every render, I believe it was used for toggleFilter.
- All files already had limited scope and components were divided into subdirectories based on the webpage (which isn't super ideal but for the scope of this project, it looks good)
- Button generic component created, didn't have time to implement a more complex one.
- Custom hook was created for Postings.jsx, which is where all the posts and filtered post code is. Saved a lot of space with it.