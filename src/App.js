import React, {useState, useRef, Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Gallery from './Gallery';
import SearchBar from './SearchBar';
import AlbumView from './AlbumView';
import ArtistView from './ArtistView';
import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
  let [search, setSearch] = useState('')
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
      <SearchContext.Provider value = {{
        term: searchInput, handleSearch: handleSearch
      }}>
        <SearchBar handleSearch = {handleSearch}/>
      </SearchContext.Provider>
      {message}
      <Router>
        <Routes>
          <Route path='/' element = {
            <Fragment>
              <SearchBar handleSearch = {handleSearch}/>
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
