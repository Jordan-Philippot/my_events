import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneEvent } from './../service/axios';
import EventDefault from '../images/eventDefault.jpg'

export default function OneEvent() {
    const [oneEvent, setOneEvent] = useState([]);
    const params = useParams();

    useEffect(() => {
        getOneEvent(setOneEvent, params.id)
    }, []);
    console.log(oneEvent)
    return (
        <div className="detailEvent-view">
            <div className="image-container" >
                <div className="title-event">{oneEvent.title}</div>
                {(() => {
                    if (oneEvent.image != null) {
                        return <img src={oneEvent.image} alt="Event" />
                    } else {
                        return <img className="defaultEvent-image" src={EventDefault} alt="Event default" />
                    }
                })()}
            </div>

            <div className="describ-container">
                <div className="city-event">{oneEvent.city}</div>
                <div className="start-event">{oneEvent.start_time}</div>
                <div className="describ-event">{oneEvent.description}</div>
                <div className="place-event">{oneEvent.venue_name}</div>
                <Link className="return-home" to={'/'} >Return</Link>
            </div>
        </div>
    )
}
