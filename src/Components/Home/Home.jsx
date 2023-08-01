import React, { useMemo} from 'react'
import classes from './Home.module.css'
import data from '../../data.json'
const Home = () => {
    
    const cardTribute = useMemo(() => {
        return data.map((tribut) => (
            <div  className={classes.headerSong} key={tribut.aud_name} >
            <a className="App-link" href={tribut.src} target="_blank" rel="noopener noreferrer">
            {tribut.name}</a> 
            
            </div>  
            
        ))
      })
    
      return (
         <div className={classes.dTcluo} >
             <div className={classes.curvedarrow}></div>
            {cardTribute}
            <div className={classes.infinity}></div>
         </div>
        
         
      )
      
    }
  

export default Home