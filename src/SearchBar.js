import React, {useState} from 'react'

export default function SearchBar(props){
    let [searchTerm, setSearchTerm] =useState('')
    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input type='text' onChange={(e)=> props.handleSearch(e, e.target.value)} placeholder = 'Enter a search term here' />
            <input type='submit' />
        </form>
    )
}