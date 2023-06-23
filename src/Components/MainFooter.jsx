import telegram from "../Assets/telegram.png";
import instagram from "../Assets/instagram.png";
import github from "../Assets/github.png";
import callMe from "../Assets/callMale.png";

import styles from "./MainFooter.module.css";

function MainFooter() {
    return (
        <footer className={styles.footer} id="contcat">
            <div className={styles.socialMedia}>
                <a href="tel:+989021571617">
                    <img src={callMe} title="My Number Phone" alt="Number Phone Logo" />
                </a>
                <a href="https://telegram.me/Mahdi_Falahatii" target="_blank">
                    <img src={telegram} title="Telegram" alt="Telegram Logo" />
                </a>
                <a href="https://www.instagram.com/rc_0_1" target="_blank">
                    <img src={instagram} title="Instagram" alt="Instagram Logo" />
                </a>
                <a href="https://github.com/Mahdi-Falahati" target="_blank">
                    <img src={github} title="GitHub" alt="GitHub Logo" />
                </a>
            </div>
            <div className={styles.bio}>All material and intellectual rights of this site belong to Mehdi Falahati</div>
        </footer>
    );
}

export default MainFooter;
