import styles from "./MainHeader.module.css";
import Logo from "../Assets/Logo.png";
import { NavLink } from "react-router-dom";

function MainHeader() {
    const activeStyle = {
        fontWeight: "bold",
        color: "#800080",
    };
    return (
        <header className={styles.header}>
            <input type="checkbox" id="nav-toggle" className={styles.checkbox} />
            <label htmlFor="nav-toggle" className={styles.button}>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <ul className={styles.header_items}>
                <li className={styles.header__item}>
                    <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        Home
                    </NavLink>
                </li>
                <li className={styles.header__item}>
                    <NavLink to="/open-source-projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        Open Source Projects
                    </NavLink>
                </li>
            </ul>
            <div className={styles.header__brand}>
                <NavLink to="/">
                    <img src={Logo} title="RC" alt="RC" />
                </NavLink>
            </div>
        </header>
    );
}

export default MainHeader;
