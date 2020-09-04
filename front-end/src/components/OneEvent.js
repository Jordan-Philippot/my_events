import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                {(() => {
                    if (oneEvent.image != null) {
                        return <img src={oneEvent.image} alt="" />
                    } else {
                        return <img className="defaultEvent-image" src={EventDefault} alt="" />
                    }
                })()}
            </div>

            <div className="describ-container">
                <div className="title-event">{oneEvent.title}</div>
                <div className="city-event">{oneEvent.city}</div>
                <div className="">{oneEvent.description}</div>
            </div>
        </div>
    )
}
