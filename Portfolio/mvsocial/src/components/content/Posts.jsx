import React from 'react';
import postsStyle from './Posts.module.css';
import Like from '../profile/Like';

function Posts(props) {
  return (
    <div className={postsStyle.post}>
        <img src="../../img/profilephoto.jpeg"/>
        <h2>{props.headerPost}</h2>
        <p className={postsStyle.postsText}>{props.message}
          <p>{props.skill1}</p>
          <p>{props.skill2}</p>
          <p>{props.skill3}</p>
          <p>{props.skill4}</p>
          <b>{props.nameMessage}</b>
          <p>{props.skill5}</p>
        </p>
        <Like value="9467"/>
    </div>
  );
}

export default Posts;