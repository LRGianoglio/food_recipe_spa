import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CardContainer, SearchBar } from "../../components/";
import { getRecipes, getDiets } from "../../redux/actions";
import styles from "./Home.module.css"

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecipes());
        dispatch(getDiets());
    }, [])

    return(
        <div className={styles.home}>
            <SearchBar />
            <CardContainer />
        </div>
    )
}

export default Home;