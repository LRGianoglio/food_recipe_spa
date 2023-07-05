const {getDietNames} = require ("../controllers/dietControllers");

const getDiets = async (req, res) => {
    try {
        const diets = await getDietNames();
        res.status(200).json(diets);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getDiets
}