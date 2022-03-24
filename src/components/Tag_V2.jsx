import React, {useState} from 'react'
import useGif from '../useGif';
const Tag_V2 = () => {
          //state para los Tag
  const[tag, setTag] = useState('dogs');
    //uso el custom hook de usegif
    const{gif, fetchGif} = useGif(tag)

      //function para actualizar el gif
      const handleClick = ()=> fetchGif(tag);
    return (
        <div className='container'>
            <h1>Random {tag} GIF</h1>
            <img width="500" src={gif}/>
            {/*Input para buscar por etiqueta el gif*/}
            <input value={tag} onChange={(e)=>setTag(e.target.value)}/>
            {/*Boton para actualizar el gif*/}
            <button onClick={handleClick}>Click para actualizar</button>
        </div>
    )
}
export default Tag_V2