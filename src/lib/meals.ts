import sql from 'better-sqlite3';
import { IMeal } from './interface/meals';

const db = sql('meals.db');

export async function getMeals(): Promise<IMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error('Some error occured');
  return db.prepare('SELECT * FROM meals').all() as IMeal[];
}
