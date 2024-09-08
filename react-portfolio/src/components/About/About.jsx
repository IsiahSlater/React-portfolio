import React from 'react';

import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
    return(
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>ABOUT</h2>
                  
            <div className={styles.content}>
             <img src={getImageUrl("about/aboutImage.png")} alt="" className={styles.aboutImage} />
                <ul className={styles.contentList}>
                    <li className={styles.listItem}>
                        <img src={getImageUrl("about/cursor.png")} alt="cursor" className={styles.listImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a front-end develper with experience in 
                                developing responsive and optimized sites</p>
                        </div>
                        
                    </li>
                    <li className={styles.listItem}>
                        <img src={getImageUrl("about/ui.png")} alt="ui" className={styles.listImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have 
                                created design systems as well</p>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <img src={getImageUrl("about/game.png")} alt="game" className={styles.listImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>Game Developer</h3>
                            <p>I have experience developing softwares in the likes
                                of Unity and Godot</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};