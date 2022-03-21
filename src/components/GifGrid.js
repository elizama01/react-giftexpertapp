import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/services/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    // const [images, SetImages] = useState([])

    const { data:images, loading } = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(SetImages);
    // }, [category])

    return (
        <div className='card-grid'><h3> {category}</h3>
           
            {loading && <p className=' animate__animated animate__rotateIn'>Loading</p>}
            
            <ol>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
