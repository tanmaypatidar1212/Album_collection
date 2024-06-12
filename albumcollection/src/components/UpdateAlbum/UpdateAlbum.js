import React,{useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./update.css"
import {Link} from 'react-router-dom';

const UpdateAlbum = ({updateAlbum}) => {
  
const[update,setupdate]=useState(null);
const {id} = useParams();
const navigate = useNavigate();

// function to handle onclick event
const handleUpdate = () => {
  updateAlbum(id,update);
  navigate('/');
}

  return (
<div className="wrapper">
    <div className="Update">
      <label style={{color:"white"}}>Update Your Album</label>
      <input type="text" name="title" placeholder='write title here...' onChange={(e) => setupdate(e.target.value)} />
      <button onClick={() => handleUpdate()}>Update Album</button>
    </div>
    <Link to="/" className='back-button'>Back</Link>

</div>
  )
}

export default UpdateAlbum