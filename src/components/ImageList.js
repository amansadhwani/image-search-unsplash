import React from 'react';


const ImageList = (props) => {

    const image = props.images.map(({id,description,urls}) =>{
        
        return <img key={id} alt={description} src={urls.regular} ></img>  
    })


    return <div className="row"> 
        <div className="col-md-3">{image} </div> </div>

}


export default ImageList;