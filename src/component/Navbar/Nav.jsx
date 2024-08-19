import React from 'react'
import './nav.css'


import { CiSearch } from "react-icons/ci";
import { LuLanguages } from "react-icons/lu";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoBarChartSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaPager } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { MdSchool } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { GoShieldLock } from "react-icons/go";
import { CiFileOn } from "react-icons/ci";
import Dashboard from '../Dashboard';

const Nav = () => {
  return (
    <div className="firstContainer">
      <div className="left">
     
        <h1><IoBarChartSharp className='logo'/> DVB</h1>
      <hr />
     
     <div className="naivator">
          <div className="firstnavi">
              <p className='dashboardNotification'><LuLayoutDashboard /> Dashboard <span className='dashnotification'>5</span></p>
              <p><FaPager />FontPage</p>
          </div>
          <div className="secondnavi">
            <h3>APP & Pages</h3>
            <div className="lists">
              <p><SlBasket />Ecommerce</p>
              <p><MdSchool />Academy</p>
              <p><CiDeliveryTruck />Logistics</p>
              <p><TfiEmail /> Email</p>
              <p> <IoChatbubbleEllipsesOutline />Chat</p>
              <p><IoCalendarNumberOutline />Calendar</p>
              <p> <FaFileInvoice />Invoice</p>
              <p><CgProfile />User</p>
              <p><CiLock />Roles & Permissions</p>
              <p><CiFileOn />Pages</p>
              <p> <GoShieldLock />Authentication</p>
              <p>...Wizard Example</p>
            </div>
          </div>
     </div>
      </div>

      <div className="right">
        <div className="header">
          <div className='search'>
          <CiSearch className='glass'/>
         <input type="text" name="" placeholder='Search...' id="search" />
          </div>
          <div className='center'></div>
          <div className='info'>
          <LuLanguages />
          <BsBrightnessHigh />
          <IoMdNotificationsOutline /><p className='red'></p>
          <CgProfile />
          </div>
        </div>
        <div className="mainBody">
          
          <Dashboard/>
        
        </div>
      </div>

    </div>
   
  )
}

export default Nav
