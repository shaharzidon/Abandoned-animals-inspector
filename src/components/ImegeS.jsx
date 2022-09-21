import {Image} from 'cloudinary-react'
import axios from 'axios'
import { useEffect, useState } from 'react';

function ImageS() {
    const [imageArry,setImageArry]=useState([])

    const getAnimals = () => {
        axios.get('/api/animals')
        .then((res) => {
            
                res.data && setImageArry([...res.data])
                
            })
    }
    useEffect(()=>{
        getAnimals()
       },[])
  return (
    <div className="App">
      <Image cloudName="dptzubs72" publicId="https://res.cloudinary.com/dptzubs72/image/upload/v1663765338/mxpqdlw3k1suipwljrad.png" style={{width:"30vw"}}></Image>
    </div>
  );
}

export default ImageS;
