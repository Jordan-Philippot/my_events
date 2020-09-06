import React from "react";
import Facebook from "./Facebook";
import { Link } from 'react-router-dom';
export default function Header() {

    return (
        <div className="header-view">
            <Link to="/">
                <div className="logo">
                    <h1>
                        <span className="char1">M</span>
                        <span className="char2">Y</span>
                        <span className="char3"> </span>
                        <span className="char4">E</span>
                        <span className="char5">V</span>
                        <span className="char6">E</span>
                        <span className="char7">N</span>
                        <span className="char8">T</span>
                        <span className="char9">S</span>
                    </h1>
                </div>
            </Link>
            <Link className="profil-link" to="/profil">PROFIL</Link>

            <Facebook />
            {/* <svg viewBox="0 0 16 16" className="bi bi-person-fill user-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg> */}

        </div>
    )
}
