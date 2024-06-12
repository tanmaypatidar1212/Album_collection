import React from 'react'
import "./album.css"
import {useState } from 'react';
import {Link} from 'react-router-dom';



const Album = ({albums,deleteAlbum,addAlbum}) => {
  const [title,setTitle] = useState('');

  // function to handle onclick event
  const handleAdd = () => {
    if(title.trim().length > 0) {
      addAlbum(title);
      setTitle('');
    }
    else{
      alert("Write a title");
    }
  }

  return (
    <div className="main">
      <div className='addAlbum'>
        <label>Add New Album</label>
        <input type="text" name="title" placeholder='write title here...' onChange={(e) => setTitle(e.target.value) } value={title} />
        <button onClick={(e) => handleAdd()}>Add Album</button>
      </div>
      
      <div className='Wrapper'>
        {albums?.map((album) =>  {
          return(
            <div key={album.id} className='album-box'>
                <h5>{album.title}</h5>
                 <div className="buttons">
                     <button className="del" onClick={() => deleteAlbum(album.id)}>Delete</button>
                     <Link className="upd" to={`/update-album/${album.id}`}>Update</Link>
                 </div>
            </div>
            )}
          )}
       </div>
    </div>
    
    
  )
}

export default Album;