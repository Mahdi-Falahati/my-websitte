import styles from "./Skills.module.css";

const Skills = () => {
    return (
        <main id="skills" className={styles.skills}>
            <div className={styles.skill__title}>
                <span></span>
                <span>Skills</span>
                <span></span>
            </div>
            <section className={styles.calculate}>
                <main>
                    <div className={styles.code}></div>
                    <div className={styles.art}></div>
                </main>
            </section>
            <div className={styles.wrap}>
                <section className={styles.skills_content}>
                    <ul className={styles.artSkills}>
                        <li>
                            <span>illustrator</span>
                        </li>
                        <li>
                            <span>photoshop</span>
                        </li>
                    </ul>
                    <ul className={styles.codeSkills}>
                        <li>
                            <span>Html & Css</span>
                        </li>
                        <li>
                            <span>sass & scss</span>
                        </li>
                        <li>
                            <span>Style-Components</span>
                        </li>
                        <li>
                            <span>bootstrap</span>
                        </li>
                        <li>
                            <p>JavaScript & EcmaScript (es6,es7,...)</p>
                            <p>oop & fetch & promise & async-await</p>
                        </li>
                        <li>
                            <span>Axios</span>
                        </li>
                        <li>
                            <span>ReactJs</span>
                        </li>
                        <li>
                            <span>Redux & redux-Toolkit</span>
                        </li>
                        <li>
                            <span>React-Router-Dom</span>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
};

export default Skills;
