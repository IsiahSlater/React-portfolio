import React from 'react'
import {getImageUrl} from "../../utils"

import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:isiahmslater@gmail.com">isiahmslater@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedInIcon.png")} alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/isiahslater/">linkedin.com/isiahslater</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                <a href="https://github.com/IsiahSlater">github.com/IsiahSlater</a>
            </li>
        </ul>
    </footer>
  )
}
