import React, { useContext, useState } from 'react';
import authContext from '../../contaxt/authContext';
import { EventType } from '../../utils/allEventsTypes';
import FileBase from 'react-file-base64';
import './createevent.css';


const CreateEvent = () => {

  const context = useContext(authContext);
  const {createEvent} = context;

  const [formData, setFormData] = useState({
    eventName: '',
    startDate: '',
    endDate: '',
    eventCreator: '',
    eventType: '',
    location: '',
    eventDescription: '',
    eventPoster: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  }

  const handleSubmit = async (e) => {
    console.log("clicked")
    e.preventDefault();
    createEvent(formData);
    alert("Event Created SuccessFully");
  }

  

  const handleReset = () => {
    setFormData({
      eventName: '',
      startDate: '',
      endDate: '',
      userId: '',
      eventCreator: '',
      eventType: '',
      location: '',
      eventDescription: '',
      eventPoster: '',
      price: 0
    });
  }

  return (
     <div className='event-form'>
      <div className='events-details'>
        <form >
          <label htmlFor="eventName">Event Name:</label>
          <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} />

          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />

          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} />

          <label htmlFor="eventCreator">Event Creator:</label>
          <input type="text" id="eventCreator" name="eventCreator" value={formData.eventCreator} onChange={handleChange} />
          Event Types : <select value={formData.eventType} name='eventType' onChange={handleChange}>
                        {
                            EventType.map((event) => {
                                return <option value={event}>{event}</option>
                            })
                        }
                    </select>

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />

          <label htmlFor="eventDescription">Event Description:</label>
          <textarea id="eventDescription" name="eventDescription" value={formData.eventDescription} onChange={handleChange}></textarea>

          <label htmlFor="eventPoster">Event Poster:</label>
          <FileBase className='fileInput' type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, eventPoster: base64 })} />


          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />

          <button type="submit" onClick={handleSubmit} className='submit-btn' style={{'width': '200px' ,'height': '50px' ,'border-radius': '8px'}}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
