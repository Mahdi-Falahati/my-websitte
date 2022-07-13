import styles from "./Page404.module.css";
import { Link } from "react-router-dom";

function Page404() {
    return (
        <section className={styles.body}>
                <main className={styles.message}>
                    <h1>
                        Error <span className={styles.errorcode}>404</span>
                    </h1>
                    <p className={styles.output}>the page you are looking for is Not Found or has been removed. for more information check the link below.</p>
                    <p className={styles.social404}>
                        go <Link to="/">Home</Link> Follow me on  <a href="https://github.com/Mahdi-Falahati">GitHub</a> 
                    </p>
                    <p className={styles.goodluck}>Good luck</p>
                </main>
        </section>
    );
}

export default Page404;
