import React from 'react';
import './nav.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Link } from 'react-router-dom';
// import '../vendor/un'
// import '../vendor/pg'

const Nav = () => {
    const list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item) =>
        item.classList.remove('active'))
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click',activeLink));
    return (
        <div>
            <div class="navigation">
        <ul>
            <li class="list active">
               <Link to="/">
                   <a>
                    <span class="icon">
                   <HomeOutlinedIcon />
                    </span>
                    <span class="text">Home</span>
                    </a>
               </Link>
            </li>
            <li class="list">
               <Link to="about">
                   <a>
                    <span class="icon">
                        <AccountCircleOutlinedIcon />
                    </span>
                    <span class="text">About me</span>
                    </a>
               </Link>
            </li>
            <li class="list">
               <Link to="/contact">
                   <a>
                    <span class="icon">
                        <EmailOutlinedIcon />
                    </span>
                    <span class="text">Contact</span>
                    </a>
               </Link>
            </li>
            <li class="list">
                <Link to="/portfolio">
                    <a>
                    <span class="icon">
                        <WorkOutlineOutlinedIcon />
                    </span>
                    <span class="text">Portfolio</span>
                    </a>
                </Link>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
        </div>
    );
};


export default Nav;