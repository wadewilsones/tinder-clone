import React from 'react';
import "./SwipeB.css";
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';


function SwipeBtn() {

    const swiped = () => {

    }

  return (
    <div className='swipeBtn'>
        <IconButton className= "swipeBtnIcon" >
            <ReplayIcon className = "swipeBtn_repeat"/>
        </IconButton>

        <IconButton  className= "swipeBtnIcon ">
            <CloseIcon  className = "swipeBtn_close"/>
        </IconButton>

        <IconButton  className= "swipeBtnIcon ">
            <StarIcon className = "swipeBtn_star"/>
        </IconButton>
        
        <IconButton className = "swipeBtnIcon">
            <FavoriteIcon  className = "swipeBtn_favorite" />
        </IconButton>

        <IconButton className= "swipeBtnIcon ">
            <FlashOnIcon  className = "swipeBtn_flashOn"/>
        </IconButton>

    </div>
  )
}

export default SwipeBtn