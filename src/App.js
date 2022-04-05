import React,{useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import './App.css';


const App = () =>{

  const [images,setImages]=useState([])



 const onSearchSubmit = async (term) =>  {
      //console.log(term);
    const response= await axios.get('https://api.unsplash.com/search/photos',
          {
          params:{query:term},
          headers:{
              Authorization: 'Client-ID a6c2b3fd810b07786243171b14aa03548602785ce1bd3eed8c0b41d9f30938b0'
          }
      })
      console.log(response.data.results);
     
      setImages(response.data.results)
  }



  return <div className="ui container" style={{marginTop:"20px"}}>
      <SearchBar onFetchTextEntered={onSearchSubmit}/>
      <div>found {images.length}: images </div>
      <ImageList images={images}></ImageList>
  </div> 
  
}

export default App;

