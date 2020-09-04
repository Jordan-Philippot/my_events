import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import { getEvents } from './../service/axios';
import Event from "./Event";
export default function Home() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents(setEvents)
    }, []);

    // console.log(events)
    return (
        <div className="home-view">
            <Menu />
            <h2>Évènements à venir</h2>
            <div className="all-events">
                {events && events.map(event => (
                    <Event event={event} key={event.id} />
                ))
                }
            </div>

        </div >
    )
}
