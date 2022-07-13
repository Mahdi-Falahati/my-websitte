import dev from "../Assets/dev.jpg";
import styles from "./Home.module.css";
import About from "../Components/About";
import Skills from "../Components/Skills";
import PageHandler from "./pageHandler";

function Home() {
    return (
        <PageHandler>
            <div className={styles.infoCard}>
                <div className={styles.webDevImage}>
                    <img src={dev} title="Web Developer" alt="Web Developer" />
                </div>
                <div className={styles.content}>
                    <p className={styles.sayHello}>Hello</p>
                    <p className={styles.typewriter}>
                        I AM <span>Mahdi-Falahati (RC)</span>
                    </p>
                    <p>JUNIOR [ React ] DEVELOPER</p>
                    <div className={styles.btns}>
                        <a className={styles.btn} href="#about">
                            About Me
                        </a>
                        <a className={styles.BtnTarget} href="#skills">
                            <span>Show Skills</span>
                        </a>
                    </div>
                </div>
            </div>
            <About />
            <Skills/>
        </PageHandler>
    );
}

export default Home;
