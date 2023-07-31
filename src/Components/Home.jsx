import React from 'react'
import classes from './Home.module.css'
import data from '../data.json'
const Home = () => {
    // const result = JSON.parse(data);
    // console.log(result);
  
  return (
    <div className='bhdLno'>Home
    <div  className={classes.headerSong}>
    <a className="App-link" href="https://www.donationalerts.com/c/vitaliy_podzemniy"target="_blank" rel="noopener noreferrer">
    Донат 1-й вариант</a>  
    </div>

    </div>
  )
}

export default Home