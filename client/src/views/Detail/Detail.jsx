import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css"

const Detail = () => {

    const {idRecipe} = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        

        axios
          .get(`http://localhost:3001/recipes/${idRecipe}`)
          .then((response) => {
            let data = response.data;
      
            if (isNaN(data.id)) {
              data = {
                ...data,
                step_by_step: data.step_by_step.split("%%")
              };
            }
      
            setRecipe(data);
          })
      }, [idRecipe]);

    const textFormat = (diet) =>{
        return (diet[0].toUpperCase() + diet.slice(1)).split(" ").join("-")
    }


    return(
        <div className={styles.mainDiv}>
            <div className={styles.descriptionDiv}>
                <img src={recipe.img} alt={`imagen de ${recipe.name}`} />
                <div className={styles.hsDiv}>
                    <p className={styles.idP}># {recipe.id}</p>
                    <p className={styles.hsP}>Health score: {recipe.health_score}</p>
                </div>
                <p className={styles.title}>{recipe.name}</p>
                <p dangerouslySetInnerHTML={{__html: recipe.description}} className={styles.description}></p>
                <div className={styles.dietDiv}>
                    <p className={styles.dietTitle}>Part of the following diets:</p>
                    <ul className={styles.dietList}>
                        {recipe.diets?.map(diet => <li className={styles.diet}>{textFormat(diet)}</li>)}
                    </ul>
                </div>
            </div>
            <div className={styles.stepsDiv}>
                <p className={styles.stepsTitle}>Step-by-step:</p>
                <ul>
                {recipe.step_by_step?.map(step => (
                    <li className={styles.steps}>{step}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Detail;