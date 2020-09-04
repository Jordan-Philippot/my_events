import axios from 'axios';

export async function getEvents(setEvents) {
    const allEvents = await axios.get('http://localhost:8000/events');
    setEvents(allEvents.data.events.event);
}

export async function getCategories(setCategories) {
    const allCategories = await axios.get('http://localhost:8000/categories');
    setCategories(allCategories.data.category);
}

export async function getOneEvent(setOneEvent, id) {
    const OneEvent = await axios('http://localhost:8000/event/' + id, {
        method: 'GET',
        mode: 'no-cors'
    })
    setOneEvent(OneEvent.data, id);
}

export async function getSearch(setSearch, place, select) {
    const search = await axios.get('http://localhost:8000/search/' + place + '/' + select, {
        method: 'GET',
        mode: 'no-cors'
    })
    setSearch(search.data.events.event)
}