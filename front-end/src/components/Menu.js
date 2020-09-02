import React, { useEffect, useState } from 'react';
import { getCategories } from './../service/axios';

export default function Menu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories(setCategories)
    }, []);
    // console.log(categories)

    return (
        <div className="menu-view">
            <div className="select">
                <select name="category" id="category">
                    {categories && categories.map(categorie => (

                        <option categorie={categorie} key={categorie.id} value="concert">{categorie.id}</option>
                    ))
                    }
                </select>
            </div>
            <input type="text" placeholder="Lieu" />
            <button>Filtrer</button>
        </div>
    )
}
