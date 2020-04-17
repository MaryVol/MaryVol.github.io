import React from 'react';
import contentStyles from './Content.module.css';

function Contact() {
    return(
        <div className={contentStyles.container}>
            <div className={contentStyles.typewriter}>
                <h2>Contact me</h2>
            </div>
            <div className={contentStyles.icons}>
                <a href="mailto:meryswhite@icloud.com">
                    <p className={contentStyles.text}>
                        <i className="fas fa-envelope-open-text"></i>
                        <span className={contentStyles.textMail}>meryswhite@icloud.com</span>
                    </p>
                </a>
                <a target="_blank" href="https://www.instagram.com/marie.vol/">
                    <p className={contentStyles.text}>
                        <i className="fab fa-instagram"></i>
                        <span className={contentStyles.textMail}>@marie.vol</span>
                    </p>
                </a>
                <a target="_blank" href="https://github.com/MaryVol">
                    <p className={contentStyles.text}>
                        <i className="fab fa-github"></i>
                        <span className={contentStyles.textMail}>https://github.com/MaryVol</span>
                    </p>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/mary-volokitina-b8b296180/">
                    <p className={contentStyles.text}>
                        <i className="fab fa-linkedin"></i>
                        <span className={contentStyles.textMail}>Mary Volokitina</span>
                    </p>
                </a>
            </div>
        </div>
    );
}

export default Contact;