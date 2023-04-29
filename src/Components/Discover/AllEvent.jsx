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
  //console.log(events_data);
  // console.log(Events);


  return (
    <div className='allevents'>

      {
        Events.map(event=>{
          return (<EventCard event={event}></EventCard>)
        })
      }

      {
        events_data?.map(event=>{
          return (event.eventType == category || category == "All Events") && <EventCard event={event} />
        })
      }
      </div>
  )
}
