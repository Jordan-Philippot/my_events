import axios from 'axios';

export async function getEvents(setEvents) {
    const allEvents = await axios.get('/events');
    setEvents(allEvents.data.events.event);
}

export async function getCategories(setCategories) {
    const allCategories = await axios.get('/categories');
    setCategories(allCategories.data.category);
}

export async function getOneEvent(setOneEvent, id) {
    const OneEvent = await axios('/event/' + id, {
        method: 'GET',
        mode: 'no-cors'
    });
    setOneEvent(OneEvent.data, id);
}


export async function getSearch(newEvents, place = "null", select) {
    const location = place || "null";
    console.log(location, select);
    const search = await axios.get('/search/' + location + '/' + select, {
        method: 'GET',
        mode: 'no-cors'
    })
    // console.log(search)
    // console.log(search.data.events.event)

    newEvents(search.data.events.event)
}

export function registerOrConnect(response) {
    axios({
        method: 'POST',
        data: response,
        url: '/user',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors'
    })
}
