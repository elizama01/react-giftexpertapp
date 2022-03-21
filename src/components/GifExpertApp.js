import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <div>GifExpertApp</div>
            <hr />
            <AddCategory setCategories={setCategories} />
            {/* <button onClick={handleAdd}>agregar</button> */}
            <ol>

                {
                    categories.map(category =>(
                        <GifGrid 
                        key={category}
                        category={category} />    
                    ))
                }

            </ol>
        </>

    )
}

