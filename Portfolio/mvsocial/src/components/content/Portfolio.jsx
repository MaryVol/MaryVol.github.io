import React from 'react';
import portfolioStyles from './Portfolio.module.css';


function Portfolio() {
  return (
        <div className={portfolioStyles.portfolio}>
            <div className={portfolioStyles.portfolioItemWrapper}>
                <div className={portfolioStyles.hoverEffect}><a target="_blank" href="https://maryvol.github.io/Portfolio/Interactive%20agency/index.html"><i class="far fa-eye"></i></a></div>
                <img src="../../img/interactive.png"></img>
                <h2>Interactive agency</h2>
                
            </div>
            <div className={portfolioStyles.portfolioItemWrapper}>
            <div className={portfolioStyles.hoverEffect}><a target="_blank" href="https://maryvol.github.io/Portfolio/portfolio/index.html"><i class="far fa-eye"></i></a></div>
                <img src="../../img/portfolio.png"></img>
                <h2>Portfolio site</h2>
            </div>
            <div className={portfolioStyles.portfolioItemWrapper}>
            <div className={portfolioStyles.hoverEffect}><a target="_blank" href="https://maryvol.github.io/Portfolio/finance%20landing/index.html"><i class="far fa-eye"></i></a></div>
                <img src="../../img/finance.png"></img>
                <h2>Finance landing</h2>
            </div>
            <div className={portfolioStyles.portfolioItemWrapper}>
            <div className={portfolioStyles.hoverEffect}><a target="_blank" href="https://maryvol.github.io/Portfolio/kalkulator/index.html"><i class="far fa-eye"></i></a></div>
                <img src="../../img/kalkulator.png"></img>
                <h2>JS Calculator</h2>
            </div>
        </div>

  );
}

export default Portfolio;