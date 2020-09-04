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


export async function getSearch(setSearch, place, select) {
    const search = await axios.get('/search/' + place + '/' + select, {
        method: 'GET',
        mode: 'no-cors'
    })
    setSearch(search.data.events.event)
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