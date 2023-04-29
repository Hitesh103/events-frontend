import React, { useContext, useEffect} from 'react'
import EventCard from '../../Event/EventCard';
import './allevent.css'
import authContext from '../../contaxt/authContext';
import Events from "../../data/allEvents.jsx"

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
   


  return (
    <div className='allevents'>


      {
        events_data?.map(event=>{
          return (event.eventType == category || category == "All Events") && <EventCard event={event} />
        })
      }
      {
        Events.map(event=>{
          console.log(event.eventType, event.eventType==category)
          return ( event.eventType == category || category == "All Events") && <EventCard event={event}/>;
        })
      }
      </div>
  )
}
