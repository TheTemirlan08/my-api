import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Catalog.scss';
import { PhotoCard } from '../../components/PhotoCard';

 const Catalog = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="catalog">
      {photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Catalog;
