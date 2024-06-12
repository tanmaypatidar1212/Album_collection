import React,{useEffect,useState} from 'react'
import Navbar from './components/navbar/nav.js'
import Album from './components/Albums/album';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateAlbum from './components/UpdateAlbum/UpdateAlbum.js';

function App() {
  const[albums,setAlbums]=useState(null);
  
// FETCHING THE DATA FROM THE URL

// Method 1 to fetch the albums
useEffect(() =>{
  const fetchData = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    await setAlbums(data);
  };
  fetchData();
},[]);

// DELETING AN ALBUM
const deleteAlbum = (albumId) => {
  // showing the deletion on url
  fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
    method: 'DELETE',
  })
  .then(alert("Deleted Album successfully."));

  // showing deletion on the UI
  const newAlbums = albums.filter((album) => album.id !== albumId);
  setAlbums(newAlbums);
};


  
// ADDING AN ALBUM
const addAlbum = (title) =>{
  fetch('https://jsonplaceholder.typicode.com/albums', {
method: 'POST',
body: JSON.stringify({
  title: title,
  userId: 1,
}),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => setAlbums([json,...albums]))
.then(alert("Added Album Successfully"));
};


//updating the album
const updateAlbum = (albumId,title) =>{
  fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
  method: 'PUT',
  body: JSON.stringify({
    id: albumId,
    title: title,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  const oldAlbum = albums.filter((album) => album.id.toString() === albumId);
  oldAlbum[0].title = title;
  alert('Update Album Successfully.')
}

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Album deleteAlbum={deleteAlbum} albums={albums} addAlbum={addAlbum} />} />
        <Route path='/update-album/:id' element={<UpdateAlbum updateAlbum={updateAlbum} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App