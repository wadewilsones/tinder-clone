import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon className = 'header_profile_icon'/>
        </IconButton>
        <img className='header_logo'
        alt = 'Tinder logo'
        src="./media/logo.png"
        ></img>
        <IconButton>
            <ForumIcon className = 'header_chat_icon'/>
        </IconButton>

      
    </div>
  )
}

export default Header