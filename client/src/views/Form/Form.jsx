import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import validate from "./validate";
import styles from "./Form.module.css";

const Form = () => {
  const diets = useSelector((state) => state.diets);

  const [recipe, setRecipe] = useState({
    name: "",
    img: "",
    description: "",
    health_score: null,
    step_by_step: [], // Initialize as an empty array
    diets: [],
  });

  
  const [errors, setErrors] = useState({
    name: "Type a name."
  });
  const [newStep, setNewStep] = useState("");
  
  const changeHandler = (event) => {
    const { name, checked } = event.target;
    let { value } = event.target;
  
    if (name === "health_score" && value && !isNaN(Number(value))) value = Number(value);
  
    if (name === "diets") {
      if (checked) {
        setRecipe({
          ...recipe,
          diets: [...recipe.diets, value],
        });
      } else {
        setRecipe({
          ...recipe,
          diets: recipe.diets.filter((diet) => diet !== value),
        });
      }
    } else {
      setRecipe({
        ...recipe,
        [name]: value,
      });
  
      setErrors(validate({
        ...recipe,
        [name]: value,
      }));
    }
  };

  const addStep = () => {
    if (newStep.trim() !== "") {
      setRecipe({
        ...recipe,
        step_by_step: [...recipe.step_by_step, newStep],
      });
      setNewStep("");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (errors.name || errors.img || errors.description || errors.health_score || errors.diets || errors.step_by_step){
      alert("There are some errors left. Check the form!")
    } else {
      const response = axios.post("http://localhost:3001/recipes",{
        ...recipe,
        step_by_step: recipe.step_by_step.join("%%")
      });
      alert("Recipe added!");
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
        <label className={styles.textRecipe}>Recipe name:</label>
        <input type="text" value={recipe.name} onChange={changeHandler} name="name" className={styles.textInput} />
      </div>
      {errors.name && <span>{errors.name}</span>}

      <div>
        <label>Image URL:</label>
        <input type="text" value={recipe.img} onChange={changeHandler} name="img" className={styles.textInput}/>
      </div>
      {errors.img && <span>{errors.img}</span>}

      {recipe.img && <img src={recipe.img} alt="" />}

      <div>
        <label>Description:</label>
        <input type="text" rows="3" value={recipe.description} onChange={changeHandler} name="description" className={styles.textInput}/>
      </div>
      {errors.description && <span>{errors.description}</span>}

      <div>
        <label>Health score:</label>
        <input type="text" value={recipe.health_score} onChange={changeHandler} name="health_score" className={styles.textInput}/>
      </div>
      {errors.health_score && <span>{errors.health_score}</span>}

      <div>
        <p>Select the diets associated with your dish:</p>
        <fieldset className={styles.checkboxFieldset}>
          {diets?.map((diet) => (
            <label key={diet}className={styles.checkbox} >
              <input
                id={diet + "Check"}
                type="checkbox"
                name="diets"
                value={diet}
                onChange={changeHandler}
                checked={recipe.diets.includes(diet)}
              />
              {(diet.charAt(0).toUpperCase() + diet.slice(1)).split(" ").join("-")}
            </label>
          ))}
        </fieldset>
      </div>
      {errors.diets && <span className={styles.spanRari}>{errors.diets}</span>}

      <div>
        <p>Add your steps one by one:</p>
        {errors.step_by_step && <span className={styles.datSpan}>{errors.step_by_step}</span>}
        <input type="text" value={newStep} onChange={(e) => setNewStep(e.target.value)} className={styles.textInput}/>
        <button type="button" onClick={addStep} className={styles.addStepButton}>
          Add Step
        </button>
          
        <div className={styles.yourStepsDiv}>
          <p className={styles.yourSteps}>Your steps:</p>
          <ul className={styles.dietList}>
            {recipe.step_by_step.map((step, index) => (
              <li key={index}>{step.split("%%")[0]}</li>
            ))}
          </ul>
        </div>
      </div>
      <button type="submit" className={styles.sendButton}>Send recipe!</button>
    </form>
  );
};

export default Form;