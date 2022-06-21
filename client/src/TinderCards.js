import { SwipeableDrawer } from '@mui/material';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "John Doe",
            url:'https://pixabay.com/get/g69f34334f00be35c796920062af0f3feaa7aa52adcfdcc5f6de26e7bd81907925ca736c8080a028e8695d939d40ee01cd821299330fa97aba5f212da6825ff3f_1920.jpg'
        },
        {
            name: "Kate Ro",
            url:'https://pixabay.com/get/g01e791ecd4e82b46885b2ca01784caf658808210f736a52a4f72e0a497bfb0c05aca3c6d53ea9a7c7523cfcb99d533885828ed3b5c7a0c77675e016380e64ad3_1920.jpg'
        },
    ]);


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