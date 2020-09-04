import React from 'react'
import { useHistory } from 'react-router-dom';
import EventDefault from '../images/eventDefault.jpg'
export default function Event(props) {
    const history = useHistory();

    function event(id) {
        return history.push("/events/" + id);
    }

    return (
        <div className="event-view" onClick={() => event(props.event.id)}>
            <div className="image-container" >
                {/* {(() => {
                    if (props.event.image != null) {
                        return <img src={props.event.image} alt="" />
                    } else {
                        return <img className="defaultEvent-image" src={EventDefault} alt="" />
                    }
                })()} */}
            </div>
            <div className="describ-container">
                <div className="title-event">{props.event.title}</div>
                <div className="city-event">{props.event.city_name}</div>
            </div>

        </div>
    )
}
