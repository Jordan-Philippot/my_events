import React, { useEffect, useState } from 'react';
export default function Profil() {
    const [name, setName] = useState('')
    const [picture, setPicture] = useState([])
    const [email, setEmail] = useState('')


    useEffect(() => {
        setName(localStorage.getItem('userName'))
        setPicture(localStorage.getItem('userPicture'))
        setEmail(localStorage.getItem('userEmail'))
    }, [])

    console.log(picture)
    return (
        <div className="profil-view container">
            <div className="row justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6 profil-container">
                    <div className="header-profil">
                        <img src={picture} alt="moi" />
                    </div>
                    <div className="body-profil">
                        <h2>Bonjour <br></br>{name}</h2><br></br>
                        <div className="email-profil">{email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
