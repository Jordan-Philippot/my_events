import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getCategories, getSearch } from './../service/axios';
import Event from './Event';

export default function Menu() {
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState([]);
    const [select, setSelect] = useState('');
    const [place, setPlace] = useState('');

    useEffect(() => {
        getCategories(setCategories)
    }, []);

    useEffect(() => {
        setPlace(place)
    }, [place]);

    useEffect(() => {
        setSelect(select)
    }, [select]);

    const handleSearch = (e) => {
        e.preventDefault();
        getSearch(setSearch, place, select)
        // return history.push('/')
    };
    console.log(search)
    return (
        <div className="menu-view">

            <div className="select">
                <select name="category" id="category" value={select}
                    onChange={(e) => setSelect(e.target.value)}>
                    {categories && categories.map(categorie => (
                        <option categorie={categorie} key={categorie.id} value={categorie.id}>{categorie.id}</option>
                    ))}
                </select>
            </div>

            <input type="text" placeholder="Lieu" value={place} onChange={(e) => setPlace(e.target.value)} />
           <button onClick={handleSearch}>
               Filtrer</button>
            {/* {search && search.map(searc => (
                <Event key={searc.id} searc={searc} />
            ))} */}
        </div>
    )
}
