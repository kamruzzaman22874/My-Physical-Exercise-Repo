import React from 'react';
import './Profile.css'

const Profile = () => {
    return (      
    <div className='profile-info'>
      <div className='profile'>
        <img className='profile-img' src="profile.jpg" alt="" />
         <div className='info-content'>
            <h3>Kamruzzaman</h3>
            <p>Dhaka, Bangladesh</p>
         </div>

        </div>
        <div className='personal-info'>
           <div className='height'>
                <h5>B.sc Eng.</h5>
                <p>Study</p>
           </div>

           
           <div className='height'>
              <h5>68Kg</h5>
              <p>Weight</p>
           </div>


           <div className='height'>
                <h5>Traveling</h5>
                <p>Hobby</p>
           </div>
        </div>
    </div>
    );
};

export default Profile;