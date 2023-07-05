import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Card} from '../index';
import styles from './CardContainer.module.css';

const CardContainer = () => {
  const recipes = useSelector(state => state.doubleFilteredRecipes);

  const recipesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(recipes.length / recipesPerPage);
  const pages = Array.from({ length: pageCount }, (_, index) => index);

  const startIndex = currentPage * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentRecipes = recipes.slice(startIndex, endIndex);

  const goToPage = page => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.mainDiv}>
        <div className={styles.cardDiv}>
            {currentRecipes.map(recipe => (
                <Card
                key={recipe.id}
                id={recipe.id}
                name={recipe.name}
                img={recipe.img}
                health_score={recipe.health_score}
                diets={recipe.diets}
                />
            ))}
        </div>
      <div className={styles.pagesDiv}>
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
         Previos
        </button>
        {pages.map(page => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={currentPage === page ? styles.activePage : ''}
            disabled={currentPage === page}
          >
            {page + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === pageCount - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardContainer;