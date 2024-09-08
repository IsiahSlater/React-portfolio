import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Isiah</h1>
                <p className={styles.description}>
                    I'm a programmer fresh out of university in both computer
                     science and graphic design. Reach out if you'd like to learn
                      more!
                </p>
                <a href="mailto:isiahmslater@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero Pic" className={styles.heroImg} />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};