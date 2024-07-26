import sql from 'better-sqlite3';
import { IMeal } from './interface/meals';
import { resolve } from 'path';
const db = sql('meals.db');

export async function getMeals(): Promise<IMeal[]> {
  await new Promise((resolve) => setTimeout(resolve, 200000));
  return db.prepare('SELECT * FROM meals').all() as IMeal[];
}
