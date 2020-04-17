import React from 'react';
import styles from './Navbar.module.css';


function Navbar(){
    return(
        <nav>
           <a href="/main"><img src="../../img/logo.svg" className={styles.logo} alt="logo"/></a> 
           <h1>Social network</h1>
        </nav>
    );
}

export default Navbar;
