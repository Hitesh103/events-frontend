import { useState } from "react";
import authContext from "./authContext";
import axios from "axios";

const AuthState = (props) => {

    const host = "http://localhost:4000";
    const [authToken, setAuthToken] = useState(localStorage.getItem('ae-hp-token'));
    const [category, setCategory] = useState("All Events");
    const [events_data, setEvents_data] = useState([])


    const login = async (token) => {
        const headers = {
            'googleAccessToken': token,
            'Content-Type': 'application/json'
        };
        const response = await axios.post(host + '/auth/google', headers);
        setAuthToken(response.data.token);
        localStorage.setItem("ae-hp-token", response.data.token);
    }

    const createEvent = async (formData) => {
        console.log(formData)
        const headers = {
            'authorization': authToken,
            'data': formData,
            'Content-Type': 'application/json'
        };
        const response = await axios.post(host + '/event/create', headers);
    }

    const getAllEvents = async () => {
        const eventsData = await axios.get(host + '/event/allevent')
        return await eventsData.data;
    }

    const getEventsByCity = async (city) =>{
        console.log(city);
        const headers = {
            'city' : city,
            'Content-Type': 'application/json'
        }
        const eventsData = await axios.post(host + '/event/city', headers)
        return await eventsData.data;
    }

    return (
        <authContext.Provider value={{ authToken, login, createEvent, getAllEvents,category, setCategory ,events_data, setEvents_data, getEventsByCity}}>
            {props.children}
        </authContext.Provider>
    )

}

export default AuthState;