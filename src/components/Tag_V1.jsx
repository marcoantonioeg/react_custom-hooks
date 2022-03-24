import axios from 'axios';
import React, {useState, useEffect} from 'react'
//api key de kos gif para obtener gifs
const API_KEY = '89v0j0NsG0SFkV0ZB0Ep9to0JROxQc4b'
const Tag_V1 = () => {
  //state para los Tag
  const[tag, setTag] = useState('dogs');
    //state para los gifs
    const[gif, setGif] = useState('');
    //solo se ejecuta al princio o cuando haya algun cambio
        //function async para obtener el gif ya que axios lo necesita
        const fetchGif = async(tag)=>{
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
            //obtengo la url con axios
            const {data} = await axios.get(url)
            console.log(data)
            //guardo la imagen del random gif
            const imageSrc = data.data.images.downsized_large.url
            console.log(imageSrc)
            //la imagen que obtenga la asigno al state
            setGif(imageSrc)
        }    
    useEffect(()=>{

        fetchGif(tag);
    }, [])
    //function para actualizar el gif
    const handleClick = ()=>{
        fetchGif(tag);
    }
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

export default Tag_V1