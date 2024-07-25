import sql from 'better-sqlite3';
import { IMeal } from './interface/meals';
const db = sql('meals.db');

export function getMeals(): IMeal[] {
  return db.prepare('SELECT * FROM meals').all() as IMeal[];
}
