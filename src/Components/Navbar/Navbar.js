import React from 'react'
import Brightness4TwoToneIcon from '@material-ui/icons/Brightness4TwoTone';
import { IconButton } from '@material-ui/core';
import './Navbar.css'
import Darkmode from 'darkmode-js';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';


const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  
  const clicker = () => {
    const darkmode = new Darkmode(options);  
    darkmode.toggle();}

    
function Navbar() {
    return (
        <div className = "header">
            <div className="headerLeft"><h3>Github Jobs</h3></div>
            <div className = "headerRight">
                
                <IconButton edge="false">
                <EmojiPeopleIcon/>
                </IconButton>
            
            <IconButton color="white" onClick={clicker}>
            
            <Brightness4TwoToneIcon/>
            </IconButton>
            </div>
            
        </div>
    )
}

export default Navbar
