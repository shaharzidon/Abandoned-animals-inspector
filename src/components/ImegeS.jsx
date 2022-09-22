import {Image} from 'cloudinary-react'
import axios from 'axios'
import { useEffect, useState } from 'react';

function ImageS() {
    const [imageArry,setImageArry]=useState([])

    const getAnimals = () => {
        axios.get('/api/animals')
        .then((res) => {
            
                res.data && setImageArry([...res.data])
                console.log(imageArry);
                
            })
    }
    useEffect(()=>{
        getAnimals()
       },[])
  return (
    <div className="App">
      <Image cloudName="dptzubs72" publicId={imageArry[9].photo} style={{width:"30vw"}}></Image>
    </div>
  );
}

export default ImageS;
