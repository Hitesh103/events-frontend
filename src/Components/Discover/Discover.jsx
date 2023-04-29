import React, { useContext, useState } from 'react'
import { EventType } from '../../utils/allEventsTypes';
import './discover.css';
import AllEvent from './AllEvent';
import authContext from '../../contaxt/authContext';

export default function Discover() {

    const context = useContext(authContext);
    const {getAllEvents,setEvents_data, category, setCategory,getEventsByCity} = context;
    const [city, setCity] = useState('');

    function handleCityChange(e) {
        setCity(e.target.value);
        //console.log(city);
    }

    function changeCategory(e) {
        setCategory(e.target.value);
    }

    async function handleCitySearch()
    {
        if(city=='')
        {
            const data = await getAllEvents();
            setEvents_data(data);
        }else{
            const data = await getEventsByCity(city);
            setEvents_data(data);
        }
    }

    return (
        <>
            <div className='Discover'>
                <h1>Find Events Happening in Your City</h1>
                <h6>
                    100+ Events  |  30 Cities  |  100K People Exploring Events
                </h6>
                <div className='eventType'>
                    <input type='text' name='city'onChange={handleCityChange} value={city} placeholder='Enter City' />
                    <select name='category' value={category} onChange={changeCategory}>
                        {
                            EventType.map((event) => {
                                return <option value={event}>{event}</option>
                            })
                        }
                    </select>
                    <button className='event-btn' onClick={handleCitySearch}>Explore</button>
                </div>
            </div >
            <br />
            <div className='eventdate'>
                <h1>
                    All Events
                </h1>
                <br />
                <div className="allevents">
                    <AllEvent/>
                </div>
            </div>
        </>
    )
}
