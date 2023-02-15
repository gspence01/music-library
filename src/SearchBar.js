import React, {useContext} from 'react'
import { SearchContext } from './context/SearchContext'

export default function SearchBar(props){
    const {term, handleSearch} = useContext(SearchContext)

    const barStyle = {
        height: "30px",
        borderRadius: "30px"
    }

    const submitStyle = {
        height: '30px',
        width: '30px',
        borderRadius: '30px',
        backgroundColor: 'rgb(160, 237, 46)',
        border: 'none'
    }

    return (
        <form style={{display: 'flex', justifyContent: 'space-around', width: '30vw', alignItems: 'center'}}>
            <input className= 'search' style={barStyle}ref = {term} type='text' placeholder = 'Search Here' />
            <button className = 'input-search' style = {submitStyle} onClick = {(e) => handleSearch(e, term.current.value)}>
                <img src='icons8-search.svg' alt='search'></img>
            </button>
        </form>
    )
}