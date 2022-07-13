import PageHandler from "../../Pages/pageHandler";
import styles from "./OpenSourceProject.module.css";
import G1 from "../../Assets/OpenSource/1.png";
import G2 from "../../Assets/OpenSource/2.png";
import G3 from "../../Assets/OpenSource/3.png";
import G4 from "../../Assets/OpenSource/4.png";
import G5 from "../../Assets/OpenSource/5.png";
import G6 from "../../Assets/OpenSource/6.png";

const Images = [
    { src: G1, addres: "https://github.com/Mahdi-Falahati/use-https.git" },
    { src: G2, addres: "https://github.com/Mahdi-Falahati/TodoList" },
    { src: G3, addres: "https://github.com/Mahdi-Falahati/Audit-of-income-and-expenses" },
    { src: G4, addres: "https://codepen.io/mahdi-falahati/pen/ExEKmad" },
    { src: G5, addres: "https://codepen.io/mahdi-falahati/pen/poLyroj" },
    { src: G6, addres: "https://codepen.io/mahdi-falahati/pen/BarzVGW" },
];

const OpenSourceProject = () => {
    return (
        <PageHandler>
            <section className={styles.content}>
                <main className={styles.gallery}>
                    {Images.map((item, index) => {
                        return (
                            <div key={index} className={styles.gallery_items}>
                                <a href={item.addres} className={styles.addres}>
                                    see source code
                                </a>
                                <img src={item.src} key={index} />
                            </div>
                        );
                    })}
                </main>
            </section>
        </PageHandler>
    );
};

export default OpenSourceProject;

