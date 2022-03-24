//todos los custom hooks deben inicar con la palbara use
import axios from 'axios';
import {useState, useEffect} from 'react'
//api key de kos gif para obtener gifs
const API_KEY = '89v0j0NsG0SFkV0ZB0Ep9to0JROxQc4b'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    //state para los gifs
    const[gif, setGif] = useState('');
    //solo se ejecuta al princio o cuando haya algun cambio
        //function async para obtener el gif ya que axios lo necesita
   
        const fetchGif = async(tag)=>{
            //obtengo la url con axios
                 //la hago dniamica
            const {data} = await axios.get(tag ? `${url}&tag=${tag}`: url)
            console.log(data)
            //guardo la imagen del random gif
            const imageSrc = data.data.images.downsized_large.url
            console.log(imageSrc)
            //la imagen que obtenga la asigno al state
            setGif(imageSrc)
        }    
    useEffect(()=>{

        fetchGif(tag);
    }, [tag])

    //retorno el gif
    return {gif, fetchGif};

}

export default useGif