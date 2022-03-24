import React from 'react'
import useGif from '../useGif';
const Random_V2 = () => {
    //uso el custom hook de usegif
    const{gif, fetchGif} = useGif()
      //function para actualizar el gif
      const handleClick = ()=> fetchGif();
    return (
        <div className='container'>
            <h1>Random GIF</h1>
            <img width="500" src={gif}/>
            {/*Boton para actualizar el gif*/}
            <button onClick={handleClick}>Click para actualizar</button>
        </div>
    )
}
export default Random_V2