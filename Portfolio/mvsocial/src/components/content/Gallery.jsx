import React from 'react';
import contentStyles from './Content.module.css';


function Gallery() {
  return (
        <div className={contentStyles.gallery}>
            <h2>My skills</h2>
            <div className={contentStyles.galleryWrapper}>
                <img src="../../img/html.png" className={contentStyles.htmlImg}/>
                <img src="../../img/js.png" className={contentStyles.jsImg}/>
                <img src="../../img/css.png" className={contentStyles.cssImg}/>
                <img src="../../img/react.png" className={contentStyles.reactImg}/>
            </div>
        </div>

  );
}

export default Gallery;