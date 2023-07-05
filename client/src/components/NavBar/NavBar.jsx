import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    const location = useLocation().pathname

    const locationDetector = (button) =>{
        if (button === location) return styles.buttonPressed;
        return styles.button;
    }

    return(
        <div className={styles.navBar}>
            <div className={styles.linkDiv}>
                <Link to="/home"><button className={locationDetector("/home")}>Recipe list</button></Link>
                <Link to="/create"><button className={locationDetector("/create")}>Share your food</button></Link>
            </div>
            {location==="/home" && <p className={styles.navBarPhrase}>Click one below to learn more about the dish!</p>}
            {location==="/create" && <p className={styles.navBarPhrase}>Show us how to make something new:</p>}
            {location.includes("/detail") && <p className={styles.navBarPhrase}>Here's everything you need to know about the dish:</p>}
        </div>
    )
}

export default NavBar;