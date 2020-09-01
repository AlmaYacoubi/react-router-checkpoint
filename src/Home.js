import React, { useState } from 'react';

import {movieData} from './Components/MovieData'

import MovieList from './Components/MovieList'
import Search from "./Components/Search/Search"
import Add from "./Components/AddMovie/AddMovie"


function App(){
  const [movieList, setMovieList]=useState(movieData)
  const [filterName, setfilterName]=useState("")
  const [filterStars, setfilterStars]= useState(1)


  const addMovie=(newMovie)=>{
    setMovieList([...movieList,newMovie])
  };
  return(
    <div >
      <Search setfilterName={setfilterName}
      setfilterStars={setfilterStars}
      filterStars={filterStars} />
    <MovieList
    filterStars={filterStars}
    filterName={filterName}
     movieList={movieList}/>
     <Add addMovie={addMovie}/>
    </div>
  )
}
export default App;
 