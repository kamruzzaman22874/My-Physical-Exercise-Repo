import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SideBar from '../Side-Bar/SideBar';
import './Home.css'

const Home = () => {
    const [timeAdded, setTimeAdded]= useState(0);
    const [dataItems, setDataItems]= useState([]);
    useEffect( ()=>{
         fetch('data.json')
         .then(res => res.json())
         .then(data => setDataItems(data))
    }, [])
    const addToCart =(time)=>{
       
        const parseTime = parseInt(time)
        const newValue = timeAdded + parseTime;
        setTimeAdded(newValue)  
    }
    return (
        <div className='home-container'>
        
            <Card dataItems={dataItems}  addToCart={addToCart}></Card>
            <SideBar timeAdded={timeAdded}></SideBar>
        </div>
    );
};

export default Home;