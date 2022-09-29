import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import './SideBar.css'
const SideBar = ({timeAdded , cardActivity}) => {
    const [timeBreak , setTimeBreak] = useState(0)

    

    const handleBtn = (e)=>{
        const getValue = e.target.innerText;
        const getNum = getValue.slice(0,-1);
        const parseNum = parseInt(getNum)
        localStorage.setItem('TimeBreak' , parseNum);
        setTimeBreak(parseNum);

    }

    useEffect (()=>{

      const getBreakTime = localStorage.getItem('TimeBreak');
      setTimeBreak(getBreakTime);
    
    },[])

// console.log(timeBreak);

    return (
        <div>
            <div className='cart'>
            <Profile></Profile>
            <hr/>
            <div className='break-container'>
            <h4 className='add-break'>Add A Break</h4>
            <div className='count-container'>
              <button onClick={(e)=> handleBtn(e)}>10Min</button>      
              <button onClick={(e)=> handleBtn(e)}>20Min</button>        
              <button onClick={(e)=> handleBtn(e)}>30Min</button>      
              <button onClick={(e)=> handleBtn(e)}>40Min</button>
              
            </div>
           </div>
           <div className='Exercise-Details'>
           <h4 className='title'>Exercise-Details</h4>
           <div className='Exercise-Count'>
           <h4>Exercise time: <span>{timeAdded}min</span></h4>
           <h5>Break time: <span>{timeBreak}</span></h5>
           </div>
   
            </div>
                <button onClick={cardActivity} className='success-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default SideBar;