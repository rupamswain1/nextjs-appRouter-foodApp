import styles from './Meals.module.css';

interface Meal {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}
interface MealProps {
  meals: Meal[] | [];
}
type meals = MealProps[] | [];

const Meals: React.FunctionComponent<MealProps> = ({ meals }) => {
  return meals.map((meal: Meal) => {
    return <div>{meal.title}</div>;
  });
};

export default Meals;
