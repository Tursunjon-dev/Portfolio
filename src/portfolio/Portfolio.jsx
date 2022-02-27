import React from 'react';
import './portfolio.css'
import '../vendor/w3.css'
import '../vendor/font.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
const Portfolio = () => {
    return (
        <div >
           <div className="active"></div>
            <div className='navigation'>
                <a href="#" className="w3-bar-item w3-button w3-padding-large">
                    <HomeIcon sx={{ fontSize: 40 }} className="homeicn"/> 
                    <p>  HOME</p>
                </a>
                
                <a href="#about" className="w3-bar-item w3-button w3-padding-large ">
                    <AccountCircleIcon sx={{ fontSize: 40 }} className="account"/>
                    <p>ABOUT</p>
                </a>
                <a href="#photos" className="w3-bar-item w3-button w3-padding-large ">
                    <WorkIcon sx={{ fontSize: 40 }} className="work"/>
                    <p>PROJECT</p>
                </a>
                <a href="#contact" className="w3-bar-item w3-padding-large w3-green">
                    <MailIcon sx={{ fontSize: 40 }} className="mail"/>
                    <p>CONTACT</p>
                </a>
               
                
            </div>
        </div>
    );
};


export default Portfolio;