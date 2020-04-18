import React from 'react';
import profileStyles from './Profile.module.css';
import Counter from './Counter';
import { NavLink } from 'react-router-dom';





function Profile() {
  return (
    
      <section className={profileStyles.profileCard}>
          <img src="../../../img/profilephoto.jpeg" alt="profile" className={profileStyles.profilePhoto}/>
          <Counter initValue="10567" initText="Follower(s)" />
          <div className={profileStyles.sideMenuWrapper}>
            <NavLink className={profileStyles.sideMenu} to='/' activeClassName={profileStyles.activeLink}>Main</NavLink>
            <NavLink className={profileStyles.sideMenu} to='/portfolio' activeClassName={profileStyles.activeLink}>Portfolio</NavLink>
            <NavLink className={profileStyles.sideMenu} to='/contact' activeClassName={profileStyles.activeLink}>Contact</NavLink>
            <a className={profileStyles.sideMenu} href="#">Messages</a>
            <a className={profileStyles.sideMenu} href="#">Music</a>
            <a className={profileStyles.sideMenu} href="#">Media</a>
          </div>
      </section>
     
  );
}

export default Profile;