import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
const MealsPage = () => {
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
      <section></section>
    </>
  );
};

export default MealsPage;
