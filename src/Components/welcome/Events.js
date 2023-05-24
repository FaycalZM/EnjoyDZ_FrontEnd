import React from 'react'
import EventItem from '../EventItem'

export default function Events() {
  return (
    <div>
        <div><h1>Upcoming events</h1></div>
        <div>
          <a href='/'>see more</a>
          <ul>
           <EventItem></EventItem> 
           <EventItem></EventItem> 
           <EventItem></EventItem> 
          </ul>
        </div>
    </div>
  )
}
