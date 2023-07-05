const validate = (form) => {
    let errors = {};
  
    if (!form.name || form.name.length < 6) errors.name = "Name must be at least 6 letters long.";
    if (!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(form.img)) errors.img = "Must provide a correct image URL.";
    if (!form.description || form.description.length < 40) errors.description = "Description must be at least 40 letters long. Tell us what's good about your dish!";
    if (!form.health_score || isNaN(Number(form.health_score)) || form.health_score < 1 || form.health_score > 100) errors.health_score = "Must be a number between 1 and 100.";
    if (!form.diets || form.diets.length < 1) errors.diets = "Must select at least one of the provided diets.";
    if (!form.step_by_step || form.step_by_step.length < 1 || form.step_by_step[0].trim() === "") errors.step_by_step = "Must have at least one step.";
  
    return errors;
  };
  
  export default validate;