import axios from 'axios';
import React, {useState, useEffect} from 'react'
//api key de kos gif para obtener gifs
const API_KEY = '89v0j0NsG0SFkV0ZB0Ep9to0JROxQc4b'
const Random_V1 = () => {
    //state para los gifs
    const[gif, setGif] = useState('');
    //solo se ejecuta al princio o cuando haya algun cambio
        //function async para obtener el gif ya que axios lo necesita
        const fetchGif = async()=>{
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

        fetchGif();
    }, [])
    //function para actualizar el gif
    const handleClick = ()=>{
        fetchGif();
    }
  return (
      <div className='container'>
          <h1>Random GIF</h1>
          <img width="500" src={gif}/>
          {/*Boton para actualizar el gif*/}
          <button onClick={handleClick}>Click para actualizar</button>
      </div>

  )
}

export default Random_V1