import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import { getMeals } from '@/lib/meals';
import Meals from '@/components/Meals/Meals';
const MealsPage = async () => {
  const meals = await getMeals();
  return (
    <>
      <header className={styles.headerContainer}>
        <h1 className={styles.heading}>
          Delicious meals, created
          <span className="highlightedText"> by you</span>
        </h1>
        <p className="subHeaderText">
          Choose your favourite reciepe and cook it yourself, It is easy and
          fun!
        </p>
        <div className="">
          <Button
            type="primary"
            text="Share Your Favourite Recipe"
            as="link"
            href="/meals/share"
          />
        </div>
      </header>
      <main className={styles.main}>
        <Meals meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
