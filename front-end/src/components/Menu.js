import React, { useEffect, useState } from 'react';
import { getCategories, getSearch } from './../service/axios';

export default function Menu() {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState([]);
    const [select, setSelect] = useState('');
    const [place, setPlace] = useState('');

    useEffect(() => {
        getCategories(setCategories)
    }, []);
    //
    // useEffect(() => {
    //     setPlace(place)
    // }, [place]);
    //
    // useEffect(() => {
    //     setSelect(select)
    // }, [select]);
    const handleSelect = (e) => {
        setSelect(e.target.value);
        // console.log(select,"select 11",e.target.value );
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(place, "select");
        getSearch(setSearch, place, select)
    };
    console.log(search)
    return (
        <div className="menu-view">

            <div className="select">
                <select name="category" id="category" value={select}
                    onChange={handleSelect}>
                    {categories && categories.map(categorie => (
                        <option key={categorie.id} value={categorie.id}>{categorie.id}</option>
                    ))}
                </select>
            </div>

            <input type="text" placeholder="Lieu" value={place} onChange={(e) => setPlace(e.target.value)} />

            <button onClick={handleSearch}> Filtrer</button>
        </div>
    )
}
