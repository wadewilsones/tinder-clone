import { SwipeableDrawer } from '@mui/material';
import React, { useInsertionEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import instance from './axios';


function TinderCards() {

    const [people, setPeople] = useState([]);

    useInsertionEffect(() => {
        async function fetchData() {
            const req = await instance.get("/tinder/cards");
            setPeople(req.data);
        }
        fetchData();
    }, [])

    console.log(people)
    // If user is swiped 

    const swiped = (dir, nametoDelete) => {
        console.log("Deleting:" + nametoDelete);
    }

    // If card is out of frame

    const outofFrame = (name) => {
        console.log(name + " left the screen");
    }


  return (
    <div className = 'tinder_cards'>
        <div className = "tinder_cards_cardContainer">
            {people.map((person) => (
            <TinderCard className = 'swipeCard' key = {person.name} preventSwipe = {["up","down"]} onSwipe = {(dir) => swiped(dir, person.name)} onCardLeftScreen = {() => outofFrame(person.name)}>
                <div className = 'card' style = {{backgroundImage:`url(${person.url})`}}>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>

            )
        )}
        </div>

    </div>
  )
}

export default TinderCards