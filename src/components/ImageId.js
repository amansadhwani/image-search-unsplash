import React from 'react'
import { useParams } from 'react-router-dom'

const ImageId = ()=>{
    const {id} = useParams();


    return <h1 data-testid="image-id">{id}</h1>


}

export default ImageId;