import styles from "./About.module.css";
import RC from "../Assets/RC.jpeg";

const About = () => {
    return (
        <div className={styles.about} id="about">
            <div className={styles.about__title}>
                <span></span>
                <span>About Me</span>
                <span></span>
            </div>
            <div className={styles.wrap}>
                <section className={styles.card}>
                    <main className={styles.card_image}>
                        <div className={styles.info}>
                            <p> My name is mahdi falahati I am 21 years old </p>
                            <p> I am from iran ( gilan ) </p>
                        </div>
                        <hr />
                        <ul className={styles.habbies}>
                            <h4 className={styles.habbies__title}>My hobbies are....</h4>
                            <li>listening to music</li>
                            <li>playing chess</li>
                            <li>Writing code & Reading the source code</li>
                        </ul>
                    </main>
                    <div className={styles.card_description}>
                        <div className={styles.RCImg}>
                            <img src={RC} title="RC" alt="RC" />
                        </div>
                    </div>
                </section>

                <section className={styles.AboutDescription}>
                    <p> I am studying computer engineering majoring in software at Gonbad Kavos University </p>
                    <p> Energetic and I am always positive , I also bring energy to the workplace and my teammates </p>
                    <p> Highly resilient in pursuing my goals and can consistently learn new knowledge </p>
                    <footer className={styles.bio__footer}>
                        <p>My strengths are I am a self-motivated and hard-working person.</p>
                        <p>My weakness is I easily trust everyone</p>
                    </footer>
                </section>
            </div>
        </div>
    );
};

export default About;

