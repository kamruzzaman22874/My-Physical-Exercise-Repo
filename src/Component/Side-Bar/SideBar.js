import React from 'react';
import Profile from '../Profile/Profile';
import './SideBar.css'
const SideBar = ({timeAdded}) => {
    return (
        <div>
            <div className='cart'>
            <Profile></Profile>
            <hr/>
            <div className='break-container'>
            <h4 className='add-break'>Add A Break</h4>
            <div className='count-container'>
              <button>10 s</button>      
              <button>20 s</button>        
              <button>30 s</button>      
              <button>40 s</button>
              
            </div>
           </div>
           <div className='Exercise-Details'>
           <h4 className='title'>Exercise-Details</h4>
           <div className='Exercise-Count'>
           <h4>Exercise time: <span>{timeAdded}min</span></h4>
           <h5>Break time: <span>0</span></h5>
           </div>
   
           </div>
           <button className='success-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideBar;