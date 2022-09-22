import PetCards from '../../components/petcards/PetCards';
import './home.css';
import {Image} from 'cloudinary-react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';

function Home() {
  const [allData,setAllData]=useState([])

  const getAnimals = () => {
      axios.get('/api/animals')
      .then((res) => {
          
              res.data && setAllData([...res.data])
              console.log(allData);
              
          })
  }
  useEffect(()=>{
      getAnimals()
     },[])

    const images =[
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    ]
    const problem=[""]
    const type=[""]
    allData.map((e,index)=>images[index]=e.photo)
    allData.map((e,index)=>problem[index]=e.problem)
    allData.map((e,index)=>type[index]=e.type)

  return (
    <div className="home">
    <PetCards image={images} problem={problem} type={type}></PetCards>
    <Footer/> 
    </div>
  );
}

export default Home;
