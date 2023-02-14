import React, {useContext} from 'react'
import { SearchContext } from './context/SearchContext'

export default function SearchBar(props){
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref = {term} type='text' placeholder = 'Search Here' />
            <button onClick = {(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}