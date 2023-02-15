//REACT AND DOM
import React, {useState, useRef, Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
//COMPONENT IMPORTS
import Gallery from './Gallery';
import SearchBar from './SearchBar';
import AlbumView from './AlbumView';
import ArtistView from './ArtistView';
import EmptyView from './EmptyView';

//CONTEXT
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
  
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0){
        return setData(resData.results)
      } else {
        return setMessage('Not Found')
      }
    }
    fetchData() 
  }

  return (
    <div className="App">
      <h1 style={{color:'rgb(160, 237, 46)'}}>{message}</h1>

      <Router>
        <Routes>
          <Route path='/' element = {
            <Fragment>
              <SearchContext.Provider value = {{
              term: searchInput, handleSearch: handleSearch}}>
                <SearchBar handleSearch = {handleSearch}/>
              </SearchContext.Provider>

              <DataContext.Provider value = {data}>
                <Gallery/>
              </DataContext.Provider>
            </Fragment>
          } />

          <Route path = '/album/:id' element = {<AlbumView />} />
          <Route path = '/artist/:id' element = {<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
