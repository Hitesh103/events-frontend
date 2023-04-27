import React, { useContext } from 'react'
import './eventCard.css';


export default function EventCard({ event }) {



    const startDate = new Date(event.startdate);
    const endDate = new Date(event.enddate);
    return (
        <div className='card' style={{ width: "18rem"}}>
            <img src={event.eventPoster} className='card-img-top' alt='Event' style={{ width: "18rem", height: "24vh" }} />
            <div className="card-body">
                <h6>{event.name}</h6>
                <h6>{startDate.toDateString()} - {endDate.toDateString()}</h6>
                <h6>{event.location}</h6>
                <span>
                    {
                        event.price>0?`Price -${event.price}₹` : "FREE"
                    }
                </span>
                <h6>
                    {
                        `Event Type : ${event.eventType}`
                    }
                </h6>
            </div>
        </div>
    )
}
 