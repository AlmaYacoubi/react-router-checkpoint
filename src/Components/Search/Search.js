import React from 'react'
import Rate from "../Rate"

function Search({setfilterName,setfilterStars,filterStars}){
    return(
        <div>
            <input type='text' placeholder='search a movie...'
            onChange={(e)=>setfilterName(e.target.value)}
            />
        <Rate  rate={filterStars}
        starsIndex={setfilterStars}/>
        </div>
    )
}
export default Search