import React, { useContext, useEffect, useState } from 'react'
import allEvent from '../../data/allEvents';
import EventCard from '../../Event/EventCard';
import './allevent.css'
import authContext from '../../contaxt/authContext';

export default function AllEvent() {

  const context = useContext(authContext);
  const {getAllEvents,category, events_data, setEvents_data} = context;

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getAllEvents();
      setEvents_data(data);
    };
    fetchEvents();
  }, []);
  console.log(events_data);


  return (
    <div className='allevents'>
      {
        events_data?.map(event=>{
          return (event.eventType ==category || category=="All Events") && <EventCard event={event}/>
        })
      }
      </div>
  )
}
