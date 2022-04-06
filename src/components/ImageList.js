import React from 'react';
import { useHistory } from "react-router-dom"

const ImageList = (props) => {

    const history = useHistory();

    const onClickRedirect = (id) =>{
         history.push(`/${id}`)
    }

    const image = props && props.images && props.images.map(({ id, description, urls }) => {
        return <div onClick={() =>onClickRedirect(id) } style={{ marginTop: "20px" }} data-testid={`img-list-${id}`} key={id} ><img alt={description} src={urls.regular} ></img> {id}</div>
    })


    return <div className="row">
        <div className="col-md-3">{image}
        </div>
    </div>

}


export default ImageList;