import styles from "./Card.module.css"
import {Link} from "react-router-dom"

const Card = ({id, name, img, diets, health_score}) => {
    
    const textFormat = (diet) =>{
        return (diet[0].toUpperCase() + diet.slice(1)).split(" ").join("-")
    }

    return(
        <Link to={`/detail/${id}`} className={styles.navLink}>
            <div className={styles.mainDiv}>
                <img src={img} alt={name} />
                <div className={styles.hsDiv}>
                    <p className={styles.hsP}>{health_score}</p>
                </div>
                <p className={styles.title}>{name}</p>
                <div className={styles.dietDiv}>
                    {diets && diets.map(diet => <p className={styles.dietP}>{textFormat(diet)}</p>)}
                </div>
            </div>
        </Link>
    )
}

export default Card;