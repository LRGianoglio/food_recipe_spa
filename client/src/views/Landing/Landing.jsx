import styles from "./Landing.module.css"
import {Link} from "react-router-dom";

const Landing = () => {
    return(
        <div className={styles.mainDiv}>
            <p className={styles.title}>WELCOME TO YOUR ONLINE COOKBOOK</p>
            <Link to="/home">
                <button className={styles.button}>
                    Let's get cooking!
                </button>    
            </Link>
        </div>
    )
}

export default Landing;