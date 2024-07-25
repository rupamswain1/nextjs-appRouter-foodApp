import Image from 'next/image';
import styles from './Meals.module.css';
import { IMeal } from '@/lib/interface/meals';
import Button from '../Button/Button';

interface MealProps {
  meals: IMeal[] | [];
}

const Meals: React.FunctionComponent<MealProps> = ({ meals }) => (
  <>
    {meals.map((meal: IMeal) => {
      return (
        <div className={styles.mealsContainer}>
          <div className={styles.mealImage}>
            <Image src={meal.image} alt={meal.title} fill />
          </div>
          <div className={styles.mealContent}>
            <p className={styles.summary}>{meal.summary}</p>
            <div className={styles.cta}>
              <Button
                type="primary"
                text="View Details"
                as="link"
                href="/meals/share"
              />
            </div>
          </div>
        </div>
      );
    })}
  </>
);

export default Meals;
